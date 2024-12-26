import { useNavigate } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card">
      <div className="profile-title">
        <img
          src={user.image}
          alt="Profile"
          onClick={() => {
            navigate(`/users/${user.id}`);
          }}
        />
      </div>
      <div className="profile-info">
        <span className="user-job-title">{user.company.title}</span>
        <p>
          <strong>First Name: </strong>
          {user.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {user.lastName}
        </p>
        <p>
          <strong>Age: </strong>
          {user.age}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
