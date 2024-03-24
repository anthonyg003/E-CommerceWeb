import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, fetchAllUsers, fetchUserCart } from "../api";
import "./login.css";

const Login = ({ setToken, setUser, setCart }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const loggedInUser = await login(username, password);
      const user = await fetchAllUsers(username);
      const userCart = await fetchUserCart(user.id);

      setToken(loggedInUser.token);
      setUser(user);
      setCart(userCart);

      setUsername("");
      setPassword("");

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="login-container">
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
          <button className="loginButton">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
