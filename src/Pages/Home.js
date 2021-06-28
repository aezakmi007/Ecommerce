import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories';
import Categ from '../Components/Categ';
import useCart from '../context/CartContext';

function Home() {
  const [data] = useState(categories);
  const { total, item, addTotal, addItems, noOfItems } = useCart();
  console.log(`total ${total}`);
  console.log(item);
  console.log(addTotal);
  console.log(addItems);
  return (
    <div>
      <h1>
        {noOfItems} {total}$
      </h1>
      <Link to="/checkout">CheckOut</Link>
      {data.map(it => (
        <Categ key={it.id} name={it.name} desc={it.description} id={it.id} />
      ))}
    </div>
  );
}

export default Home;
