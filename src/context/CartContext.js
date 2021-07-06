/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(
    localStorage.getItem('total')
      ? JSON.parse(localStorage.getItem('total'))
      : 0
  );
  const [noOfItems, setNoOfItems] = useState(
    localStorage.getItem('noOfItems')
      ? JSON.parse(localStorage.getItem('noOfItems'))
      : 0
  );
  const [items, setItems] = useState(
    localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : []
  );

  const addTotal = value => {
    setTotal(prev => prev + value);
  };

  const addItems = prod => {
    setItems(prev => [...prev, prod[0]]);
    // const key =
    // localStorage.setItem(item = items)
  };
  const decreaseTotal = value => {
    // const price = 'price';
    setTotal(prev => prev - value);
    // localStorage.setItem((price, JSON.stringify(total)));
  };
  const reduceCart = value => {
    const arr = [...items];
    const index = arr.indexOf(value);
    arr.splice(index, 1);
    setItems(arr);
  };
  const changeNoOfItems = () => {
    setNoOfItems(prev => prev + 1);
  };
  const decreaseNoOfItems = val => {
    setNoOfItems(prev => prev - val);
  };
  useEffect(() => {
    localStorage.setItem('total', total);
    localStorage.setItem('noOfItems', noOfItems);
    localStorage.setItem('items', JSON.stringify(items));
  }, [items, noOfItems, total]);
  // useEffect(() => {
  //   setItems(JSON.parse(localStorage.getItem('items')));
  //   setNoOfItems(JSON.parse(localStorage.getItem('noOfItems')));
  //   setTotal(JSON.parse(localStorage.getItem('total')));
  // }, []);
  return (
    <CartContext.Provider
      value={{
        total,
        items,
        noOfItems,
        changeNoOfItems,
        addItems,
        addTotal,
        decreaseTotal,
        reduceCart,
        decreaseNoOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export default useCart;
