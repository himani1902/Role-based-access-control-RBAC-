import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import SuperUserDashboard from "./pages/SuperUserDashboard";
import UserDashboard from "./pages/UserDashboard";
import Register from "./pages/Register";
import { UserProvider } from "./context/UserContext";
import './index.css'; // Make sure this line is included in your main entry file

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/superuser" element={<SuperUserDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
