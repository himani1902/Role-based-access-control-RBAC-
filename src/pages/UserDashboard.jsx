// UserDashboard.jsx
import React from "react";
import { useUsers } from "../context/UserContext";

const UserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container py-10">
      <h2 className="text-4xl font-semibold text-gray-800">User Dashboard</h2>
      <p className="text-lg text-gray-600">Access your personal information here.</p>

      <div className="mt-8">
        <div className="card">
          <h3 className="text-2xl font-semibold text-gray-700">Your Details</h3>
          <table>
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th>User ID</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      onClick={() => alert(`User ${user.id} clicked`)}
                      className="button-primary"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
