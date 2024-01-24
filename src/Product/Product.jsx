import React from 'react';
import StyledProduct from './StyledProduct';


const Product = ({ product }) => {
  const handleAddToBasket = () => {
    const addToBasketEvent = new CustomEvent('addToBasket', {
      detail: { product,},
    });

    window.dispatchEvent(addToBasketEvent);

    console.log(`Added ${product.title} to the basket`);
  };
  return (
    <StyledProduct>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Brand:</b> {product.brand}</p>
      <img src={product.thumbnail} alt={product.title} />
      <button onClick={handleAddToBasket}>Add to Basket</button>

    </StyledProduct>
  );
};

export default Product;
