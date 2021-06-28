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
    setItems(prev => [...prev, prod]);
  };
  const changeNoOfItems = () => {
    setNoOfItems(prev => prev + 1);
  };
  return (
    <CartContext.Provider
      value={{ total, items, noOfItems, changeNoOfItems, addItems, addTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export default useCart;
