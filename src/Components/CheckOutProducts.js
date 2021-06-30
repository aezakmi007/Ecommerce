import React, { useState } from 'react';
import useCart from '../context/CartContext';
import prod from '../data/products';

function CheckOutProducts({ name, image, id, price }) {
  console.log(id);
  console.log(name);
  const { addTotal, decreaseTotal, reduceCart, decreaseNoOfItems } = useCart();

  const [quantity, setQuantity] = useState(1);

  const onIncrease = val => {
    setQuantity(prev => prev + 1);
    addTotal(prod.find(x => x.id === val).price);
    // changeNoOfItems();
  };

  const onDecrease = val => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      decreaseTotal(prod.find(x => x.id === val).price);
      console.log(val);
    }
  };

  const onRemove = val => {
    if (quantity === 0) {
      reduceCart(prod.find(x => x.id === String(val)));
      decreaseNoOfItems();
    } else {
      reduceCart(prod.find(x => x.id === val));
      decreaseTotal(prod.find(x => x.id === val).price * quantity);
      decreaseNoOfItems();
    }
  };

  return (
    <div>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h2>Cost : {price}$</h2>
      <h3>{quantity}</h3>
      <button type="button" onClick={() => onIncrease(id)}>
        Increase
      </button>
      <button
        type="button"
        disabled={quantity === 0}
        onClick={() => onDecrease(id)}
      >
        Decrease
      </button>
      <button type="button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default CheckOutProducts;
