import React from "react";
import '../App.css';

const ProductDisplay = ({ products }) => {
    return (
      <div className="product-display">
        <h3>Products</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default ProductDisplay;
