import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

export default function ProductsList({ query, maxPrice, updateCartCount }) {
  //Show Loading while products are fetching.
  //if fetched, list the products. else, show error message
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/search?q=" + query
        );
        const jsonData = await response.json();
        const productsList = jsonData.products;
        setProducts(productsList);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
      }
    };
    fetchData();
    setLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading.......</p>;
  }

  if (error) {
    return <p>Error Fetching Products: {error.message}</p>;
  }

  return (
    <div id="products-list">
      {products.map((product) => {
        if (product.price <= maxPrice)
          return (
            <ProductCard product={product} updateCartCount={updateCartCount} />
          );
      })}
    </div>
  );
}
