import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import About from "./pages/About";
import "./App.css";

function RootPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = window.localStorage.getItem("user-token");
    if (token) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
