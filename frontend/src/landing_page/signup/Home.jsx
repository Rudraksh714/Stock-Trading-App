import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
  console.log("HOME MOUNTED - starting verify"); // ye add karo

  const verifyCookie = async () => {
    console.log("CALLING API URL:", `${process.env.REACT_APP_API_URL}/auth/`); // ye bhi add karo

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/`,
        {},
        { withCredentials: true },
      );

      console.log("VERIFY RESPONSE:", data); // ye bhi add karo

      const { status, user } = data;

      if (status) {
        setUsername(user);
        toast(`Hello ${user}`, { position: "top-right" });
      } else {
        console.log("STATUS FALSE - redirecting to login"); // ye bhi
        navigate("/login");
      }
    } catch (error) {
      console.log("AUTH ERROR CAUGHT:", error);
      window.location.href = "https://stock-trading-app-rho.vercel.app/login";
    }
  };

  verifyCookie();
}, [navigate]);

  const Logout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );

      window.location.href =
        "https://stock-trading-app-rho.vercel.app/login";
    } catch (error) {
      console.log("LOGOUT ERROR:", error);
    }
  };

  return (
    <>
      <div
        className="home_page"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          background:
            "linear-gradient(135deg, #2b3040 0%, #3a4054 45%, #2b3040 100%)",
        }}
      >
        <h4 style={{ color: "#f5f6f8" }}>
          Welcome <span style={{ color: "#7C8CFF" }}>{username}</span>
        </h4>

        <button
          onClick={Logout}
          style={{
            padding: "10px 24px",
            background:
              "linear-gradient(135deg, #4C5FD5 0%, #5B3FE0 100%)",
            border: "1px solid rgba(76, 95, 213, 0.4)",
            borderRadius: "8px",
            color: "#ffffff",
            fontWeight: "600",
            boxShadow: "0 6px 18px rgba(76, 95, 213, 0.35)",
            cursor: "pointer",
          }}
        >
          LOGOUT
        </button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Home;