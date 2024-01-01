import { useNavigate } from "react-router-dom";
import InvalidUser from "../assets/InvalidUser";
import ProductsList from "../assets/ProductsList";
import { useState } from "react";
import cartProducts from "../../cartProducts";
import "./Home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);

  function isUserValid() {
    const token = window.localStorage.getItem("user-token");
    if (token) {
      return true;
    }
    return false;
  }
  function HomePageContent() {
    const navigate = useNavigate();
    const [sliderValue, setSliderValue] = useState(2000);
    const [cartCount, setCartCount] = useState(cartProducts.length);
    function search() {
      const query = document.getElementById("search-bar").value;
      const maxSliderValue = document.getElementById("max-slider").value;
      setSearchQuery(query);
      setMaxPrice(maxSliderValue);
    }
    function logout() {
      window.localStorage.removeItem("user-token");
      navigate("/login");
    }
    function updateSliderValue() {
      const val = document.getElementById("max-slider").value;
      setSliderValue(val);
    }
    function updateCartCount() {
      setCartCount(cartCount + 1);
    }

    return (
      <div id="home-content">
        <div id="header">
          <button onClick={logout} id="logout-btn">
            Logout
          </button>
          <button id="about-btn" onClick={() => navigate("/about")}>
            About Dev
          </button>
          <div id="search-div">
            <input type="text" placeholder="Search product" id="search-bar" />
            <button onClick={search}>Search</button>
          </div>
          <div id="slider-div">
            <p>0</p>
            <input
              type="range"
              min={0}
              max={2000}
              defaultValue={2000}
              id="max-slider"
              onInput={updateSliderValue}
            />
            <p>{sliderValue}</p>
          </div>
          <div id="cart-div">
            <button onClick={() => navigate("/cart")}>Go to Cart</button>
            <p>{cartCount}</p>
          </div>
        </div>

        <div id="products">
          <center>
            <h1>Products</h1>
          </center>
          <ProductsList
            query={searchQuery}
            maxPrice={maxPrice}
            updateCartCount={updateCartCount}
          />
        </div>
      </div>
    );
  }
  return (
    <div id="home">{isUserValid() ? <HomePageContent /> : <InvalidUser />}</div>
  );
}
