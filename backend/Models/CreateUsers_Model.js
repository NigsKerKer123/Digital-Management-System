const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcyrpt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema(
  {
    schoolID: {
      type: Number,
      required: true,
      unique: true,
    },

    firstname: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    middlename: {
      type: String,
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: Number,
      required: true,
    },

    accountType: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    school_year: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//To hash the password
// userSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcyrpt.genSalt(10);
//     const hashedPassword = await bcyrpt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//     console.log(this.email, this.password);
//   } catch (error) {
//     next(error);
//   }
// });

//Hash og check kung ga exist naba ang email
//Pang create sad ni diri og user or signup
userSchema.statics.signup = async function (
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
) {
  //Validation
  if (!validator.isEmail(email)) {
    throw Error("Email is not Valid!!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error(`Password is not strong enough
    Password must be 8 characters above
    Password must Includes at least one number
    Password must Includes at least one special character.`);
  }

  // Check for an existing user with the given email
  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error("Email already in use");
  }

  // Hash the password
  const salt = await bcyrpt.genSalt(10);
  const hashedPassword = await bcyrpt.hash(password, salt);

  // Create the user in the database
  const user = await this.create({
    schoolID,
    firstname,
    lastname,
    middlename,
    username,
    password: hashedPassword,
    email,
    phone,
    accountType,
    address,
    course,
    school_year,
    age,
    gender,
  });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email) {
    throw Error("Please fill up Email");
  }

  if (!password) {
    throw Error("Please fill up Password");
  }

  // Check for an existing user with the given email
  const existingUser = await this.findOne({ email });

  if (!existingUser) {
    throw new Error("Incorrect Email");
  }

  const match = await bcyrpt.compare(password, existingUser.password);

  if (!match) {
    throw Error("Incorrect passsword");
  }

  return existingUser;
};

// //JWT
// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY);
// };

module.exports = mongoose.model("Users", userSchema);
