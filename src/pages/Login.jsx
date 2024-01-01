import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  async function getToken() {
    const loginInfo = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });
    const jsonData = await response.json();
    if (jsonData.id) {
      window.localStorage.setItem("user-token", jsonData.token);
    }
    navigate("/home");
  }

  function LoggedIn() {
    const token = window.localStorage.getItem("user-token");
    if (token) {
      return (
        <div id="logged-in">
          <p>You are already logged-in !</p>
          <button
            onClick={() => {
              navigate("/home");
            }}
          >
            Go to Home Page
          </button>
        </div>
      );
    }
    return <div></div>;
  }
  return (
    <center>
      <div id="login">
        <h1>Login Page</h1>
        <p>(username: "kminchelle", password: "0lelplR")</p>
        <input type="text" placeholder="Username" id="username" />
        <input type="text" placeholder="Password" id="password" />
        <button onClick={getToken}>Login</button>
        <br />
        <LoggedIn />
      </div>
    </center>
  );
}
