import { React, useState } from "react";
import { login } from "../api";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const loggedInUser = await login(username, password);

      console.log("logged in ==>", loggedInUser);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form className="loginForm" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <label className="username">
            Username:{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="password">
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
