/* eslint-disable no-nested-ternary */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import useCart from '../context/CartContext';
import prod from '../data/products';

function CheckOutProducts({ name, image, id, price }) {
  console.log(id);
  console.log(name);
  const {
    addTotal,
    decreaseTotal,
    reduceCart,
    decreaseNoOfItems,
    changeNoOfItems,
  } = useCart();

  const [quantity, setQuantity] = useState(
    localStorage.getItem('quantityData')
      ? JSON.parse(localStorage.getItem('quantityData')).length !== 0
        ? JSON.parse(localStorage.getItem('quantityData')).find(x => x.i === id)
            .quant
        : 1
      : 1
  );

  const removeQuantity = y => {
    let data = JSON.parse(localStorage.getItem('quantityData'));
    data = data.filter(x => x.i !== y);
    if (data.length === 0) {
      localStorage.removeItem('quantityData');
    } else {
      localStorage.setItem('quantityData', JSON.stringify(data));
    }
  };

  const onIncrease = val => {
    setQuantity(prev => prev + 1);
    addTotal(prod.find(x => x.id === val).price);
    changeNoOfItems();
  };

  const onDecrease = val => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      decreaseTotal(prod.find(x => x.id === val).price);
      decreaseNoOfItems(1);
      console.log(val);
    }
  };

  const onRemove = val => {
    if (quantity === 0) {
      reduceCart(prod.find(x => x.id === String(val)));
      decreaseNoOfItems(quantity);
      removeQuantity(id);
    } else {
      reduceCart(prod.find(x => x.id === val));
      decreaseTotal(prod.find(x => x.id === val).price * quantity);
      decreaseNoOfItems(quantity);
      removeQuantity(id);
    }
  };
  // useEffect(() => {
  //   const data = [];
  //   localStorage.setItem('quantityData', JSON.stringify(data));
  // });

  useEffect(() => {
    const arr = {
      i: `${id}`,
      quant: quantity,
    };
    if (localStorage.hasOwnProperty('quantityData') === true) {
      if (JSON.parse(localStorage.getItem('quantityData')).length !== 0) {
        let getData = JSON.parse(localStorage.getItem('quantityData'));
        const val = getData.find(x => x.i === id);

        if (val) {
          getData.forEach(x => {
            if (x.i === id) {
              x.quant = quantity;
              localStorage.setItem('quantityData', JSON.stringify(getData));
            }
          });
        } else {
          getData = getData.concat(arr);
          localStorage.setItem('quantityData', JSON.stringify(getData));
        }
      } else {
        let getData = JSON.parse(localStorage.getItem('quantityData'));
        getData = getData.concat(arr);
        localStorage.setItem('quantityData', JSON.stringify(getData));
      }
    } else {
      const a = [];
      a.push(arr);
      localStorage.setItem('quantityData', JSON.stringify(a));
    }
  }, [quantity]);

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
