import React, { useState, useEffect } from 'react';
import Product from './Product';
import StyledProductList from './ProductList.styled';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <StyledProductList>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
