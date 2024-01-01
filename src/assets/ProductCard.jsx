import cartProducts from "../../cartProducts";
import "./ProductCard.css";

export default function ProductCard({ product, updateCartCount }) {
  function addToCart() {
    //search if the product already exists in cart
    const foundIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    if (foundIndex !== -1) {
      //if exists, just increase its quantity (by  using foundIndex)
      cartProducts[foundIndex].quantity += 1;
    } else {
      //if not found, add the product into cart with quantity=1
      const newCartProduct = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        quantity: 1,
      };
      cartProducts.push(newCartProduct);
      updateCartCount();
    }
  }
  return (
    <div className="product-card" key={product.id} id={product.id}>
      <center>
        <img src={product.thumbnail} alt="" />
      </center>

      <p className="pc-title">{product.title}</p>
      <p className="pc-price">Price(₹): {product.price}</p>
      <p className="pc-discount">Discount(%): {product.discountPercentage}</p>
      <p className="pc-rating">Rating: {product.rating}</p>
      <hr />
      <div>
        <button className="buy-now-btn">Buy Now</button>
        <button onClick={addToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
