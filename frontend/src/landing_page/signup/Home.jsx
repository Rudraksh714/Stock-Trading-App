import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/verify`,
        {},
        { withCredentials: true },
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
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
          {" "}
          Welcome <span style={{ color: "#7C8CFF" }}>{username}</span>
        </h4>
        <button
          onClick={Logout}
          style={{
            padding: "10px 24px",
            background: "linear-gradient(135deg, #4C5FD5 0%, #5B3FE0 100%)",
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
