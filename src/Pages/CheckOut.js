import React from 'react';
import useCart from '../context/CartContext';
import CheckOutProducts from '../Components/CheckOutProducts';

function CheckOut() {
  const { noOfItems, total, items } = useCart();

  return (
    <div>
      <h1>
        {noOfItems} {total}$
      </h1>
      {items.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        items.map(x => (
          <CheckOutProducts
            key={x.id}
            id={x.id}
            name={x.name}
            image={x.thumbnail}
            price={x.price}
          />
        ))
      )}
    </div>
  );
}

export default CheckOut;
