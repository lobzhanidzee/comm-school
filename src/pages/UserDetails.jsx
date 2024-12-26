import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/api";
import UserDetailsCard from "../components/UserDetails/UserDetailsCard";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className="user-details">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <UserDetailsCard user={user} />}
    </div>
  );
};

export default UserDetails;
