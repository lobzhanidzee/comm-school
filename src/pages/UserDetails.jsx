import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../services/api";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
      {!loading && !error && (
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
              {user.address.country}, {user.address.city},{" "}
              {user.address.address}
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
      )}
    </div>
  );
};

export default UserDetails;
