import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

const RegisterAccountForm = () => {
  const [schoolID, setSchoolID] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [school_year, setSchool_year] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const { signup, error, loading, userCreated, response } = useSignup();

  //Function to send request
  const handleSubmit = async (e) => {
    e.preventDefault();

    //e passa na sa useSignup na hook para ma process
    signup(
      schoolID,
      firstname,
      lastname,
      middlename,
      username,
      password,
      confirmPassword,
      email,
      phone,
      accountType,
      address,
      course,
      school_year,
      age,
      gender
    );

    try {
      if (response.ok) {
        setSchoolID("");
        setFirstname("");
        setLastname("");
        setMiddlename("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setPhone("");
        setAccountType("");
        setAddress("");
        setCourse("");
        setSchool_year("");
        setAge("");
        setGender("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Return forms
  return (
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url('https://private-user-images.githubusercontent.com/151451458/285633471-dfb7836b-5451-4a17-8b9f-3dfe5bad0230.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEwMTkzMjAsIm5iZiI6MTcwMTAxOTAyMCwicGF0aCI6Ii8xNTE0NTE0NTgvMjg1NjMzNDcxLWRmYjc4MzZiLTU0NTEtNGExNy04YjlmLTNkZmU1YmFkMDIzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNlQxNzE3MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTM2YjEzNTY5NzA3ODg0OWMwN2VkM2I3ZDMyOWRjYzdjODhmNGVlZjU5OGFkMmM5ODg3ZTQ1MTE1ZDlkMjBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Jpj9uNTRwh-5UocMR3NS6y46q18m3ppBnBckFiG1YZE')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      ></div>
      {/* Background image */}

      <div className="d-flex justify-content-center align-items-center">
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
            width: "75%",
          }}
        >
          <div className="card-body py-5 px-md-7">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9">
                <h2 className="fw-bold mb-5">Register new Officer</h2>

                {/* Naa ra diri ang FORM */}
                <form onSubmit={handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    {/* Lastname */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                          onChange={(e) => setLastname(e.target.value)}
                          value={lastname}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Last name
                        </label>
                      </div>
                    </div>

                    {/* firstname */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                          onChange={(e) => setFirstname(e.target.value)}
                          value={firstname}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          First name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Middle name and Suffix input */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Middle Name"
                          onChange={(e) => setMiddlename(e.target.value)}
                          value={middlename}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Middle name
                        </label>
                      </div>
                    </div>

                    {/* Age */}
                    <div className="col-md-3 mb-4 ">
                      <div className="form-outline">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Age"
                          onChange={(e) => setAge(e.target.value)}
                          value={age}
                        />
                        <label className="form-label" htmlFor="age">
                          Age
                        </label>
                      </div>
                    </div>

                    {/*Gender*/}
                    <div className="col-md-3 mb-2">
                      <div className="form-outline">
                        <select
                          className="select form-control"
                          onChange={(e) => setGender(e.target.value)}
                          value={gender}
                        >
                          <option
                            value=""
                            disabled
                            style={{ textAlign: "center" }}
                          >
                            Select Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <label className="form-label select-label">Gender</label>
                    </div>
                  </div>

                  {/* Student ID and Contact Number */}
                  <div className="row">
                    {/* Student ID */}
                    <div className="col-md-3 mb-4 ">
                      <div className="form-outline">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Student ID"
                          onChange={(e) => setSchoolID(e.target.value)}
                          value={schoolID}
                        />
                        <label className="form-label" htmlFor="age">
                          Student ID
                        </label>
                      </div>
                    </div>

                    {/* Phone number */}
                    <div className="col-md-3 mb-4 ">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="phone"
                          className="form-control"
                          placeholder="Enter Contact Number"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                        <label className="form-label" htmlFor="age">
                          Contact Number
                        </label>
                      </div>
                    </div>
                    {/* Address */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address"
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Address
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Email and Username input */}
                  <div className="row">
                    {/* Username */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Username
                        </label>
                      </div>
                    </div>

                    {/* email */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email address
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Password input */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword}
                        />
                        <label className="form-label" htmlFor="form3Example4">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Type of Officer input */}
                  <div className="row">
                    {/* Officer Role */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <select
                          className="select form-control"
                          onChange={(e) => setAccountType(e.target.value)}
                          value={accountType}
                        >
                          <option value="" disabled>
                            Select Role
                          </option>
                          <option value="Secretariat">Secretariat</option>
                          <option value="Finance">Finance</option>
                          <option value="Technical Design">
                            Technical Design
                          </option>
                          <option value="Sports And Development">
                            Sports And Development
                          </option>
                          <option value="Events">Events</option>
                          <option value="Clubs">Clubs</option>
                        </select>
                      </div>
                      <label className="form-label select-label">
                        Officer Role
                      </label>
                    </div>

                    {/* select course */}
                    <div className="col-md-3 mb-2">
                      <div className="form-outline">
                        <select
                          className="select form-control"
                          onChange={(e) => setCourse(e.target.value)}
                          value={course}
                        >
                          <option value="" disabled>
                            Select Course
                          </option>
                          <option value="BSBA">BSBA</option>
                          <option value="BSHM">BSHM</option>
                          <option value="BSA">BSA</option>
                        </select>
                      </div>
                      <label className="form-label select-label">Course</label>
                    </div>

                    {/* School year */}
                    <div className="col-md-3 mb-2">
                      <div className="form-outline">
                        <select
                          className="select form-control"
                          onChange={(e) => setSchool_year(e.target.value)}
                          value={school_year}
                        >
                          <option value="" disabled>
                            Select Year
                          </option>
                          <option value="1st year">1ST</option>
                          <option value="2nd year">2ND</option>
                          <option value="3rd year">3RD</option>
                          <option value="4th year">4TH</option>
                        </select>
                      </div>
                      <label className="form-label select-label">
                        School Year
                      </label>
                    </div>
                  </div>

                  {/* Buttons*/}
                  <div className="row">
                    {/* Submit button */}
                    <div className="col-md-6">
                      <div className="form-outline">
                        <button
                          type="submit"
                          className="btn btn-success btn-block col-md-6 form-control"
                          disabled={loading}
                        >
                          Create
                        </button>
                      </div>
                    </div>

                    {/* back button */}
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <Link to="/home">
                          <button
                            type="button"
                            className="btn btn-primary btn-block col-md-6 form-control"
                          >
                            Back
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>

                {/* alert kung naay error */}
                {error && (
                  <div className="error">
                    <div
                      className="alert alert-danger"
                      role="alert"
                      data-mdb-color="danger"
                    >
                      <i className="fas fa-exclamation-triangle me-3">
                        <img
                          src="https://www.pngall.com/wp-content/uploads/8/Red-Warning.png"
                          width="20"
                          alt="Alert img"
                        ></img>
                      </i>
                      {error.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Alert kung succesful */}
                {userCreated && (
                  <div className="error">
                    <div
                      className="alert alert-success"
                      role="alert"
                      data-mdb-color="danger"
                    >
                      <i className="fas fa-exclamation-triangle me-3">
                        <img
                          src="https://freepngimg.com/download/success/6-2-success-png-image.png"
                          width="20"
                          alt="Success icon"
                        ></img>
                      </i>
                      {userCreated}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAccountForm;
