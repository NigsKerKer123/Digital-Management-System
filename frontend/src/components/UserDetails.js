import { useUserContext } from "../hooks/useUserContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { formatRelative, subDays } from "date-fns";

const UserDetails = ({ user }) => {
  const { dispatch } = useUserContext();

  //mao ning function para mo send og delete request, para ma delete ang isa ka user
  const handleClick = async () => {
    const response = await fetch(
      process.env.REACT_APP_PORT + "/api/users/" + user._id,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: user._id });
    }
  };
  return (
    <div className="">
      <h4>{user._id}</h4>
      <p>{user.username}</p>
      <p>{user.firstname}</p>
      <p>{user.middlename}</p>
      <p>{user.lastname}</p>
      <p>{user.password}</p>
      <p>{user.email}</p>
      <p>{user.address}</p>
      <p>{user.age}</p>
      <p>{user.course}</p>
      <p>{user.school_year}</p>
      <p>
        {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
      </p>
      <p>{formatRelative(subDays(new Date(user.createdAt), 3), new Date())}</p>

      <span
        type="button"
        className="material-symbols-outlined"
        onClick={handleClick}
      >
        delete
      </span>
    </div>
  );
};

export default UserDetails;
