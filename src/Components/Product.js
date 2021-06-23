import React from 'react';

function Product({ name, price, inStock, currency, image }) {
  return (
    <div>
      <img src={image} alt="xyz" />
      <h3>{name}</h3>
      <h4>
        {price}
        {currency}
      </h4>
      <h4>{inStock ? 'Yes' : 'No'}</h4>
    </div>
  );
}

export default Product;
