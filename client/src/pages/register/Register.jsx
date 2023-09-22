import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitClick");
    setErr(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      console.log("tryRun");
      res.data && window.location.replace("/login");
    } catch (error) {
      setErr(true);
      console.log("CatchRun");
      console.log(error);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your user name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton " type="submit">
          Register
        </button>
      </form>
      <button className="registerRegisterButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>

      {err && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Somting went wrong
        </span>
      )}
    </div>
  );
};
