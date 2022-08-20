const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    secretCode: {
      type: String,
      required: true,
    },
    employerEmail: {
      type: String,
      required: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Company", companySchema);
