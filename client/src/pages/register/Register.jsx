import { Link } from "react-router-dom";
import "./register.css";

export const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <from className="registerForm">
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your user name"
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
        />
        <button className="registerButton ">Register</button>
      </from>
      <button className="registerRegisterButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
};
