// ProductList.js
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ProductList = ({ products }) => {
  // Sort products by descending popularity
  const sortedProducts = [...products].sort(
    (a, b) => b.Popularity - a.Popularity,
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.Title}</td>
            <td>{product.Price}</td>
            <td>{product.Popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Add prop validation for 'products'
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Price: PropTypes.number.isRequired,
      Popularity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
