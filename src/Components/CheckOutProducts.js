/* eslint-disable no-unneeded-ternary */
/* eslint-disable dot-notation */
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
    items,
  } = useCart();
  const quantityDataFromLocalStorage = () => {
    let obj = JSON.parse(localStorage.getItem('quantityData'));
    console.log(obj);
    obj = obj.find(x => x.i === id);
    if (obj) return obj.quant;
    return 1;
  };
  const [quantity, setQuantity] = useState(
    localStorage.getItem('quantityData') ? quantityDataFromLocalStorage : 1
  );

  const removeQuantity = y => {
    let data = JSON.parse(localStorage.getItem('quantityData'));
    // alert(`Deleted Item is ${y}`);
    data = data.filter(x => x.i !== y);
    console.log(data);
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
      reduceCart(items.find(x => x.id === String(val)));
      decreaseNoOfItems(quantity);
      removeQuantity(id);
    } else {
      reduceCart(items.find(x => x.id === String(val)));
      decreaseTotal(prod.find(x => x.id === val).price * quantity);
      decreaseNoOfItems(quantity);
      removeQuantity(id);
    }
  };
  // useEffect(() => {
  //   const data = [];
  //   localStorage.setItem('quantityData', JSON.stringify(d
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
            console.log(x);
            if (x.i === id) {
              x.quant = quantity;
              localStorage.setItem('quantityData', JSON.stringify(getData));
            }
          });
        } else {
          getData = getData.concat(arr);
          localStorage.setItem('quantityData', JSON.stringify(getData));
        }
      }
      // } else {
      //   let getData = JSON.parse(localStorage.getItem('quantityData'));
      //   getData = getData.concat(arr);
      //   localStorage.setItem('quantityData', JSON.stringify(getData));
    } else {
      const a = [];
      a.push(arr);
      localStorage.setItem('quantityData', JSON.stringify(a));
    }
  });

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
