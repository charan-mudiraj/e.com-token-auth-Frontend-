import { useNavigate } from "react-router-dom";
import "./InvalidUser.css";
export default function InvalidUser() {
  const navigate = useNavigate();
  return (
    <div id="invalid-user">
      <h1>Invalid User</h1>
      <p>Please Go to Login Page and Login with your credientials</p>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Go to Login Page
      </button>
    </div>
  );
}
