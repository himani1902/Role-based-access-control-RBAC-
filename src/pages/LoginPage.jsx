import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

const LoginPage = () => {
  const { users } = useUsers();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.id === id && user.password === password);

    if (user) {
      setError("");
      switch (user.role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Super User":
          navigate("/superuser");
          break;
        case "User":
          navigate("/user");
          break;
        default:
          setError("Role not recognized.");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div id="login-form" className="container max-w-sm mx-auto bg-white p-8 shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="userId" className="block text-gray-600">User ID</label>
        <input
          id="userId"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
      </div>
      <button onClick={handleLogin} className="button-primary w-full">Login</button>
    </div>
  );
};

export default LoginPage;
