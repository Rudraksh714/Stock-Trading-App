import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      console.log("LOGIN RESPONSE:", data);

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setInputValue({
          email: "",
          password: "",
        });

        window.location.href =
          "https://stock-trading-app-1re2-nu.vercel.app/";
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("MESSAGE:", error.message);

      handleError(
        error.response?.data?.message || "Something went wrong",
      );
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit">Submit</button>

        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;