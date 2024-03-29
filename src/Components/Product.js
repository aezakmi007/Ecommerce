/* eslint-disable no-prototype-builtins */
import React from 'react';
import useCart from '../context/CartContext';
import prod from '../data/products';

function Product({
  name,
  price,
  inStock,
  currency,
  image,
  delivery,
  rating,
  // onAdd,
  id,
}) {
  // const [quantity, setQuantity] = useState(0);
  const { total, items, addTotal, addItems, noOfItems, changeNoOfItems } =
    useCart();

  console.log(`total ${total}`);
  console.log(items);
  console.log(addTotal);
  console.log(addItems);
  console.log(noOfItems);

  const checkInclude = () => {
    if (items.length === 0) {
      return false;
    }

    for (let i = 0; i < items.length; i++) {
      const value = items[i].id;
      if (value === id) {
        return true;
      }
    }
    return false;
  };

  const onAdd = () => {
    const condition = checkInclude();
    console.log(condition);
    if (!condition) {
      addTotal(prod.find(x => x.id === id).price);
      changeNoOfItems();
      const productId = prod.find(x => x.id === id).id;
      const productData = prod.filter(x => x.id === productId);
      console.log(productData);
      addItems(productData);
    } else {
      alert('Already Added to the cart');
    }
  };

  // const increase = () => {
  //   setQuantity(prev => prev + 1);
  // };
  // const decrease = () => {
  //   if (quantity !== 0) {
  //     setQuantity(prev => prev - 1);
  //   }
  // };

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
      <button type="button" disabled={!inStock} onClick={onAdd}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
