const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const catchAsync = require("../utils/catchAsync");

const isLoggedIn = catchAsync(async (req, res, next) => {
  const { token } = req.headers?.authorization.split(" ")[1];

  if (!token) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "유효하지 않은 접근입니다.",
      },
    });
  }

  const { id } = jwt.verify(token, process.env.SECRET_KEY);
  const employee = await Employee.findById(id).lean();

  req.employee = employee;

  return next();
});

module.exports = isLoggedIn;
