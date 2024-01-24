import React, { lazy, Suspense } from 'react';
import StyledProduct from './StyledProduct';
const RemoteButton = lazy(() => import('UI/Button'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteButton label="Add to Basket" onClick={handleAddToBasket}/>
      </Suspense>
    </StyledProduct>
  );
};

export default Product;
