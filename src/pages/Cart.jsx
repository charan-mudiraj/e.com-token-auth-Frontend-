import cartProducts from "../../cartProducts";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function CartProduct(product) {
  return (
    <div className="cart-product" key={product.id} id={product.id}>
      <img src={product.thumbnail} alt="" />
      <div>
        <p className="cp-title">{product.title}</p>
        <p className="cp-price">Price(₹): {product.price}</p>
        <p className="cp-quantity">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}

export default function Cart() {
  const navigate = useNavigate();
  return (
    <div id="cart">
      <center>
        <button onClick={() => navigate("/home")}>Go to Home</button>
        <hr />
        <h1>Cart</h1>
      </center>

      <div id="cart-products">{cartProducts.map(CartProduct)}</div>
    </div>
  );
}
