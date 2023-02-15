const express = require("express");
const router = express.Router();
const {
  submitUserDetails,
  getAllForms,
} = require("../controllers/userController");

router.route("/submitform").post(submitUserDetails);
router.route("/getforms").get(getAllForms);

module.exports = router;
