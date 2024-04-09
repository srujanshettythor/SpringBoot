import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDetails.css";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/login/all");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const regularUsers = users.filter((user) => user.usertype !== "Admin");

  return (
    <div className="user-details-container">
      <h2>Users Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>User ID</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {regularUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.userid}</td>
              <td>{user.usertype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
