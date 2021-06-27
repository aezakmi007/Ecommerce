import React, { useState } from 'react';

function Product({ name, price, inStock, currency, image, delivery, rating }) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(prev => prev + 1);
  };
  const decrease = () => {
    if (quantity !== 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div>
      <img src={image} alt="xyz" />
      <h3>Product Name : {name}</h3>
      <h4>
        Amount :{price}
        {currency}
      </h4>
      <h4>In Stock : {inStock ? 'Yes' : 'No'}</h4>
      <h4>Deliverable : {delivery ? 'Yes' : 'No'}</h4>
      <h4>Rating : {rating}</h4>
      <p> Qunatity : {quantity}</p>
      <button type="button" disabled={!inStock} onClick={increase}>
        increase
      </button>
      <button type="button" disabled={!inStock} onClick={decrease}>
        decrease
      </button>
      <button type="button" disabled={!inStock}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
