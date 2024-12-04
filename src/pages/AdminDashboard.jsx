import React from "react";
import { useUsers } from "../context/UserContext";

const AdminDashboard = () => {
  const { users, addUser, deleteUser, updateUserRole } = useUsers();

  const handleAddUser = (newUser) => {
    addUser(newUser);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  const handleUpdateRole = (id, newRole) => {
    updateUserRole(id, newRole);
  };

  return (
    <div className="container py-10" id="admin-dashboard">
      <h2 id="dashboard-heading">Admin Dashboard</h2>
      <p className="text-lg text-gray-600">Manage users, roles, and permissions.</p>

      <div className="mt-8">
        <div className="card" id="user-list">
          <h3 className="text-2xl font-semibold text-gray-700">User Management</h3>
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
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                      className="p-2 border rounded"
                    >
                      <option value="User">User</option>
                      <option value="Super User">Super User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </td>
                  <td id="user-actions">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="button-danger"
                    >
                      Delete
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

export default AdminDashboard;
