// src/ProductList.js

import React from 'react';
import './ProductList.css'; 


const ProductList = () => {
    const products = [
        { id: 1, name: "Macbook", description: "A laptop computer", price: 1200 },
        { id: 2, name: "iPhone", description: "A smart phone by Apple", price: 999 },
        { id: 3, name: "iWatch", description: "A smart watch by Apple", price: 600 },
      ];

  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

  