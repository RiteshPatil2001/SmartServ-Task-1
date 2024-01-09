import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Product from "./Product";
import "../styles/styles.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://s3.amazonaws.com/open-to-cors/assignment.json",
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data && data.products) {
          // Extract products from the data object
          const productData = Object.values(data.products);

          // Map JSON data to Product instances
          const productInstances = productData.map((item) => {
            return new Product(
              item.subcategory,
              item.title,
              item.price,
              item.popularity,
            );
          });

          setProducts(productInstances);
        } else {
          console.error("Invalid data format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
