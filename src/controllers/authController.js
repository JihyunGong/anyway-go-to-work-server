const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const { firebaseAdminAuth } = require("../config/firebase");
const { secretKey, option } = require("../config/secretkey");
const catchAsync = require("../utils/catchAsync");

exports.login = catchAsync(async (req, res, next) => {
  const firebaseToken = req.headers.authorization.split(" ")[1];

  let verifiedEmployee = "";

  if (firebaseToken) {
    verifiedEmployee = await firebaseAdminAuth.verifyIdToken(firebaseToken);
  }

  if (!verifiedEmployee) {
    return res.json({
      result: "error",
      error: {
        status: 401,
        message: "유효하지 않은 유저입니다.",
      },
    });
  }

  const { name, email } = verifiedEmployee;

  let employee = await Employee.findOne({ email }).lean();

  if (!employee) {
    employee = await Employee.create({
      name,
      email,
    });
  }

  if (name !== employee.name) {
    await Employee.findByIdAndUpdate(employee._id, { $set: { name } });
  }

  const jwtToken = jwt.sign({ id: employee._id }, secretKey, option);

  if (jwtToken) {
    return res.json({
      result: "success",
      data: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        token: jwtToken,
      },
    });
  }
});
