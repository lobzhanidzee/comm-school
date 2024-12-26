import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard/UserCard";

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
          users.map((user) => {
            return <UserCard user={user} navigate={navigate} key={user.id} />;
          })}
      </div>
    </>
  );
};
export default Users;
