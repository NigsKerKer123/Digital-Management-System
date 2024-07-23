const databaseModel = require("../Models/CreateUsers_Model");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTPRIVATEKEY, { expiresIn: "3d" });
};

//Find all
const getAll = async (req, res) => {
  const model = await databaseModel.find({}).sort({ createAt: -1 });
  res.status(200).json(model);
};

//Find one
const getOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Id is not valid" });
  }

  const model = await databaseModel.findById(id);

  if (!model) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(model);
};

//Create
// const create = async (req, res) => {
//   const {
//     schoolID,
//     firstname,
//     lastname,
//     middlename,
//     username,
//     password,
//     email,
//     phone,
//     accountType,
//     address,
//     course,
//     school_year,
//     age,
//     gender,
//   } = req.body;

//   try {
//     const model = await databaseModel.create({
//       schoolID,
//       firstname,
//       lastname,
//       middlename,
//       username,
//       password,
//       email,
//       phone,
//       accountType,
//       address,
//       course,
//       school_year,
//       age,
//       gender,
//     });
//     res.status(200).json(model);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

//delete
const deleteOne = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Id is not valid" });
  }

  const model = await databaseModel.findOneAndDelete({ _id: id });
  if (!model) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(model);
};

//update
const update = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Id is not valid" });
  }

  const model = await databaseModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!model) {
    return res.status(404).json({ error: "Not found" });
  }

  res.status(200).json(model);
};

//Log in user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await databaseModel.login(email, password);

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const {
    schoolID,
    firstname,
    lastname,
    middlename,
    username,
    password,
    email,
    phone,
    accountType,
    address,
    course,
    school_year,
    age,
    gender,
  } = req.body;

  try {
    const user = await databaseModel.signup(
      schoolID,
      firstname,
      lastname,
      middlename,
      username,
      password,
      email,
      phone,
      accountType,
      address,
      course,
      school_year,
      age,
      gender
    );

    //Create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  // create,
  getOne,
  getAll,
  deleteOne,
  update,
  loginUser,
  signupUser,
};
