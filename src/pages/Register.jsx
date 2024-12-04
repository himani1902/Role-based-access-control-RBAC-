import React, { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleRegister = () => {
    if (id && password) {
      addUser({ id, password, role });
      alert("User registered successfully!");
      navigate("/login");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div id="register-form" className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Register New User</h2>
      <div className="mb-4">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="User ID"
          className="p-3 border rounded w-80"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-3 border rounded w-80"
        />
      </div>
      <div className="mb-6">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-3 border rounded"
        >
          <option value="User">User</option>
          <option value="Super User">Super User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button onClick={handleRegister} className="button-primary w-full">Register</button>
    </div>
  );
};

export default Register;
