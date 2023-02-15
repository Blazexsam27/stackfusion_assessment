const User = require("../models/User");

const submitUserDetails = async (req, res) => {
  try {
    const phoneNo = req.body.phoneNo;
    if (phoneNo.length < 10 || parseInt(phoneNo) < 1e9)
      throw "invalid phone number";
  } catch (error) {
    return res.status(400).send({ message: error });
  }
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      dob: req.body.dob,
      phoneNo: req.body.phoneNo,
    });
    res.status(200).send({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Error Occured" });
  }
};

const getAllForms = async (req, res) => {
  try {
    const forms = await User.find();
    return res.status(200).send({ forms });
  } catch (error) {
    res.status(500).send({ message: "Internal Error Occured" });
  }
};

module.exports = {
  submitUserDetails,
  getAllForms,
};
