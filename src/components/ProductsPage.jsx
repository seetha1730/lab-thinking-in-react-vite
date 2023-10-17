// ProductsPage.jsx
import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import productData from "./../data.json";

function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const handleSearch = (searchTerm, showOnlyInStock) => {
    let filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (showOnlyInStock) {
      filtered = filtered.filter((product) => product.inStock);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable productData={filteredProducts} />
    </div>
  );
}

export default ProductsPage;