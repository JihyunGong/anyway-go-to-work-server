const mongoose = require("mongoose");

const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");

exports.getCompany = catchAsync(async (req, res, next) => {
  const { employeeId } = req.params;
  const { name, secretCode } = req.query;

  if (!mongoose.isValidObjectId(employeeId)) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "유효하지 않은 유저 정보입니다.",
      },
    });
  }

  if (!name || !secretCode) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "입력하지 않은 정보가 있습니다.",
      },
    });
  }

  const company = await Company.findOne({ name, secretCode })
    .populate("employees")
    .lean();

  if (!company) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "일치하는 회사 정보가 없습니다.",
      },
    });
  }

  return res.json({
    result: "success",
    data: { company },
  });
});

exports.createCompany = catchAsync(async (req, res, next) => {
  const { name, secretCode } = req.body;
  const { _id, email } = req.employee;

  if (!name || !secretCode) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "입력하지 않은 정보가 있습니다.",
      },
    });
  }

  await Company.create({
    name,
    secretCode,
    employerEmail: email,
    employees: [_id],
  });

  return res.json({ result: "success" });
});

exports.updateCompany = catchAsync(async (req, res, next) => {
  const { companyId } = req.params;
  const { _id } = req.employee;

  if (!mongoose.isValidObjectId(companyId)) {
    return res.json({
      result: "error",
      error: {
        status: 400,
        message: "유효하지 않은 회사 정보입니다.",
      },
    });
  }

  const company = await Company.findByIdAndUpdate(companyId, {
    $push: { employees: _id },
  })
    .populate("employees")
    .lean();

  return res.json({
    result: "success",
    data: { company },
  });
});
