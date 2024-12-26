import { useNavigate } from "react-router-dom";
import "./UserDetailsCard.css";

const UserDetailsCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {"<"}
      </button>
      <div>
        <img src={user.image} alt="Profile Piture" />
        <p>username: {user.username}</p>
        <p>ID: {user.id}</p>
      </div>
      <div>
        <p>
          <strong>First name: </strong> {user.firstName}{" "}
        </p>
        <p>
          <strong>Last name: </strong> {user.lastName}{" "}
        </p>
        <p>
          <strong>Age: </strong> {user.age}{" "}
        </p>
        <p>
          <strong>E-Mail: </strong> {user.email}{" "}
        </p>
        <p>
          <strong>Phone number: </strong> {user.phone}{" "}
        </p>
        <p>
          <strong>Address: </strong>
          {user.address.country}, {user.address.city}, {user.address.address}
        </p>
        <p>
          <strong>University: </strong> {user.university}{" "}
        </p>
        <h2>Work</h2>
        <p>
          <strong>Company name: </strong> {user.company.name}{" "}
        </p>
        <p>
          <strong>Department: </strong> {user.company.department}{" "}
        </p>
        <p>
          <strong>Position: </strong> {user.company.title}{" "}
        </p>
      </div>
    </>
  );
};

export default UserDetailsCard;
