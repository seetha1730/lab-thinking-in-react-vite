// ProductTable.jsx
import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ productData }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow productData={productData} />
      </tbody>
    </table>
  );
}

export default ProductTable;
