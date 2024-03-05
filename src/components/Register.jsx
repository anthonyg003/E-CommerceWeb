import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();

      console.log("You have registered");

      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error("There was an error handleRegister", error);
    }
  };

  return (
    <>
      <div>
        <form className="registerForm" onSubmit={handleRegister}>
          <h2>Register</h2>
          <label className="firstname">
            First Name:{" "}
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="lastname">
            Last Name:{" "}
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="username">
            Username:{" "}
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="email">
            Email:{" "}
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="password">
            Password:{" "}
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="signUp">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register;
