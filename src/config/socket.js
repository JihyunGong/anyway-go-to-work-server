require("dotenv").config();
const SocketIo = require("socket.io");

const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");

exports.socketIo = (server) => {
  const io = SocketIo(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ["GET", "POST"],
    },
  });

  const employees = {};
  const videoChatParticipants = {};
  const socketToVideoChatSpace = {};

  io.on("connection", (socket) => {
    console.log("Socket connected...");

    socket.on(
      "joinRoom",
      catchAsync(async (employeeData) => {
        const { id, name, nickname, character, timestamp, companyId } =
          employeeData;

        const company = await Company.findById(companyId);

        socket.join(companyId);

        employees[id] = {
          name,
          nickname,
          character,
          timestamp,
          scrum: "",
          status: "",
          photo: "",
        };

        io.to(companyId).emit("employeeData", {
          employees,
          company,
        });

        socket.on("leaveRoom", (employeeId) => {
          delete employees[employeeId];

          io.to(companyId).emit("leavingEmployeeData", employees);
        });

        socket.on("sendMessage", (messageData) => {
          io.to(companyId).emit("messageData", messageData);
        });

        socket.on("sendDailyScrum", (scrumData) => {
          const { employeeId, scrum } = scrumData;

          employees[employeeId].scrum = scrum;

          io.to(companyId).emit("scrumData", employees);
        });

        socket.on("sendStatus", (statusData) => {
          const { employeeId, status } = statusData;

          employees[employeeId].status = status;

          io.to(companyId).emit("statusData", employees);
        });

        socket.on("joinVideoChat", (roomID) => {
          if (videoChatParticipants[roomID]) {
            videoChatParticipants[roomID].push(socket.id);
          } else {
            videoChatParticipants[roomID] = [socket.id];
          }

          socketToVideoChatSpace[socket.id] = roomID;
          const participants = videoChatParticipants[roomID].filter(
            (id) => id !== socket.id
          );

          socket.emit("currentVideoChatParticipants", participants);
        });

        socket.on("sendingSignalToConnectWebRTC", (payload) => {
          io.to(payload.userToSignal).emit("newVideoChatParticipant", {
            signal: payload.signal,
            callerID: payload.callerID,
          });
        });

        socket.on("returningSignalToConnectWebRTC", (payload) => {
          io.to(payload.callerID).emit(
            "receivingReturnedSignalToConnectWebRTC",
            { signal: payload.signal, id: socket.id }
          );
        });

        socket.on("leaveVideoChat", () => {
          const roomID = socketToVideoChatSpace[socket.id];

          if (videoChatParticipants[roomID]) {
            videoChatParticipants[roomID] = videoChatParticipants[
              roomID
            ].filter((id) => id !== socket.id);
          }

          delete socketToVideoChatSpace[socket.id];

          socket.broadcast.emit("participantLeft", socket.id);
        });

        socket.on("disconnect", () => {
          // if (isJoinedPlayer(socket.id)) {
          const roomID = socketToVideoChatSpace[socket.id];

          if (videoChatParticipants[roomID]) {
            videoChatParticipants[roomID] = videoChatParticipants[
              roomID
            ].filter((id) => id !== socket.id);
          }

          delete socketToVideoChatSpace[socket.id];

          socket.broadcast.emit("participantLeft", socket.id);

          // const leftPlayer = playerLeave(socket.id);

          // socket.to(roomID).emit("playerLeaveRoom", leftPlayer);

          // socket.leave(roomID);
          // }
        });
      })
    );
  });
};
