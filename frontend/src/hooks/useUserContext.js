import { UsersContext } from "../context/userContext";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw Error("useUserContext must be used inside an userContextProvider");
  }

  return context;
};
