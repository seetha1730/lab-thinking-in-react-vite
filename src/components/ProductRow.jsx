// ProductRow.jsx
import React from "react";

function ProductRow({ productData }) {
  if (!productData || !Array.isArray(productData)) {
    console.error("Invalid or missing product data");
    return null;
  }

  return (
    <>
      {productData.map((product, index) => (
        <tr key={index} className="active-row">
          <td>{index + 1}</td>
          {product.inStock === true ? (
            <td>{product.name}</td>
          ) : (
            <td style={{ backgroundColor: "red", color: "white" }}>{product.name}</td>
          )}
          <td>{product.price}</td>
          <td>{product.inStock === true ? <td>in Stock</td> : <td>Out of Stock</td>}</td>
        </tr>
      ))}
    </>
  );
}

export default ProductRow;