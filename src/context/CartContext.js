import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);
  const [items, setItems] = useState([]);

  const addTotal = value => {
    setTotal(prev => prev + value);
  };

  const addItems = prod => {
    setItems(prev => [...prev, prod[0]]);
  };
  const decreaseTotal = value => {
    setTotal(prev => prev - value);
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
  const decreaseNoOfItems = () => {
    setNoOfItems(prev => prev - 1);
  };
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
