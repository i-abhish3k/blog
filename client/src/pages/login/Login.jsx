import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <from className="loginForm">
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your Password"
        />
        <button className="loginButton">Login</button>
      </from>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
