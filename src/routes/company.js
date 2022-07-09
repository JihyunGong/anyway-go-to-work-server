const express = require("express");

const isLoggedIn = require("../middlewares/authorization");
const companyController = require("../controllers/companyController");

const router = express.Router();

router.get("/:employeeId", isLoggedIn, companyController.getCompany);
router.post("/", isLoggedIn, companyController.createCompany);
router.patch("/:companyId", isLoggedIn, companyController.updateCompany);

module.exports = router;
