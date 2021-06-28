/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import prod from '../data/products';
import Product from '../Components/Product';
import useCart from '../context/CartContext';

function Category() {
  const { id } = useParams();
  const { total, items, addTotal, addItems, noOfItems, changeNoOfItems } =
    useCart();

  console.log(`total ${total}`);
  console.log(items);
  console.log(addTotal);
  console.log(addItems);
  console.log(changeNoOfItems);

  const catId = id;
  // console.log(catId);

  const [array] = useState(prod.filter(it => it.categoryId === catId));
  const [filterText, setFilterText] = useState('');

  const checked = ['All'];

  const newArr = [...array];

  let filteredItems = [];

  const checkedFunction = text => {
    if (checked.length === 0) {
      checked.push(text);
    } else {
      checked.pop();
      checked.push(text);
    }
  };

  if (filterText) {
    if (filterText === 'price') {
      const val = newArr.reduce((a, b) => (a.price >= b.price ? a : b)).price;
      console.log(val);
      filteredItems = newArr.filter(it => it.price === val);
      checkedFunction(filterText);
    } else if (filterText === 'delivery') {
      filteredItems = newArr.filter(it => it.delivery === true);
      checkedFunction(filterText);
    } else if (filterText === 'bestSelling') {
      const value = newArr.reduce((a, b) =>
        a.bestSelling > b.bestSelling ? a : b
      ).bestSelling;
      filteredItems = newArr.filter(it => it.bestSelling === value);
      checkedFunction(filterText);
    } else {
      filteredItems = newArr;
      checkedFunction(filterText);
    }
  }

  // console.log(filteredItems);
  const displayArr = filterText ? filteredItems : array;

  // const onAddTotal = value => {
  //   console.log(displayArr.find(x => x.id === value));
  // };

  return (
    <div>
      <h1>
        {noOfItems} {total}$
      </h1>
      <Link to="/checkout">CheckOut</Link>
      <h3>Filters</h3>
      <label htmlFor="p">
        All
        <input
          type="checkbox"
          checked={checked[0] === 'All'}
          value="All"
          id="p"
          onChange={e => setFilterText(e.target.value)}
        />
      </label>
      <label htmlFor="p">
        Price
        <input
          type="checkbox"
          checked={checked[0] === 'price'}
          value="price"
          id="p"
          onChange={e => setFilterText(e.target.value)}
        />
      </label>
      <label htmlFor="p">
        Delivery
        <input
          type="checkbox"
          checked={checked[0] === 'delivery'}
          value="delivery"
          id="p"
          onChange={e => setFilterText(e.target.value)}
        />
      </label>
      <label htmlFor="p">
        Best Selling
        <input
          type="checkbox"
          checked={checked[0] === 'bestSelling'}
          value="bestSelling"
          id="p"
          onChange={e => setFilterText(e.target.value)}
        />
      </label>
      {displayArr.map(it => (
        <Product
          key={it.id}
          name={it.name}
          inStock={it.inStock}
          price={it.price}
          image={it.thumbnail}
          currency={it.currency}
          delivery={it.delivery}
          rating={it.bestSelling}
          id={it.id}
          // onAdd={onAddTotal}
        />
      ))}
    </div>
  );
}

export default Category;
