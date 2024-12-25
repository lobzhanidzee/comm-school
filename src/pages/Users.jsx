import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/api";
import "./Users.css";

const Users = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { users } = await getUsers();

        setUsers(users);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      <div className="users-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          users.map((user, i) => {
            return (
              <div key={i} className="user-card">
                <div className="profile-title">
                  <img
                    src={user.image}
                    alt="Profile Picture"
                    onClick={() => {
                      navigate(`/users/${i}`);
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
          })}
      </div>
    </>
  );
};
export default Users;
