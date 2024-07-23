import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [userCreated, setUserCreated] = useState(null);
  const [loading, setLoading] = useState(null);
  let response;

  const signup = async (
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
  ) => {
    //para ma disable and button
    setLoading(true);

    //para dili mag sigeg display ang error
    setError(null);

    if (!lastname) {
      setError("Please fill out the Last Name field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!firstname) {
      setError("Please fill out the First Name field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!middlename) {
      setError("Please fill out the Middle Name field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!age) {
      setError("Please fill out the age.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!gender) {
      setError("Please select a Gender.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!schoolID) {
      setError("Please fill out the Student ID field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!phone) {
      setError("Please fill out the Contact Number field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!address) {
      setError("Please fill out the Address field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!username) {
      setError("Please fill out the Username field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!email) {
      setError("Please fill out the Email field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!password) {
      setError("Please fill out the Password field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!confirmPassword) {
      setError("Please fill out the Confirm Password field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!phone) {
      setError("Please fill out the Phone field.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!accountType) {
      setError("Please select an Officer Role.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!course) {
      setError("Please select an Course.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (!school_year) {
      setError("Please select a School year.");
      setUserCreated(null);
      setLoading(false);
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      setUserCreated(null);
      setLoading(false);
      return;
    }

    try {
      response = await fetch(process.env.REACT_APP_PORT + "/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
        }),
      });
    } catch (error) {
      console.log(error);
    }

    let json;

    try {
      json = await response.json();
    } catch (error) {
      setError("An error occurred while processing the response.");
      setUserCreated(null);
      setLoading(false);
      return;
    }

    if (!response.ok) {
      if (
        json.error.includes("duplicate key error") &&
        json.error.includes("username")
      ) {
        setError("Username already exists!");
        setUserCreated(null);
        setLoading(false);
      } else if (
        json.error.includes("duplicate key error") &&
        json.error.includes("schoolID")
      ) {
        setError("SchoolID already exists!");
        setUserCreated(null);
        setLoading(false);
      } else if (
        json.error.includes("duplicate key error") &&
        json.error.includes("email")
      ) {
        setError("Email already exists!");
        setUserCreated(null);
        setLoading(false);
      } else {
        setError(json.error);
        setUserCreated(null);
        setLoading(false);
      }
    }

    if (response.ok) {
      setUserCreated("New Officer added!!");
      console.log("New Officer added!!", json);
    }
  };
  return { signup, error, loading, userCreated, response };
};
