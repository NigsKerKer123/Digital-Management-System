import React, { useEffect } from "react";
import UserDetails from "../../components/UserDetails";
import { useUserContext } from "../../hooks/useUserContext";

const User = () => {
  const { users, dispatch } = useUserContext();

  useEffect(() => {
    //mao ning function para mo send og get request para ma kuha ang mga users
    const fetchUser = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_PORT + "/api/users");
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_USER", payload: json });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("An error occurred while fetching user data", error);
      }
    };

    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    console.log("Updated User State:", users);
  }, [users]);

  return (
    <div className="user">
      {users && users.map((user) => <UserDetails key={user._id} user={user} />)}
    </div>
  );
};

export default User;
