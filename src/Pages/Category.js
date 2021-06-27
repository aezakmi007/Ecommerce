/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import prod from '../data/products';
import Product from '../Components/Product';

function Category() {
  const { id } = useParams();
  const catId = id;
  console.log(catId);
  const [array] = useState(prod.filter(item => item.categoryId === catId));
  const [filterText, setFilterText] = useState('');

  // const [checked, isChecked] = useState('');
  const checked = ['All'];

  const newArr = [...array];

  let filteredItems = [];

  if (filterText) {
    if (filterText === 'price') {
      const val = newArr.reduce((a, b) => (a.price >= b.price ? a : b)).price;
      console.log(val);
      filteredItems = newArr.filter(item => item.price === val);
      if (checked.length === 0) {
        checked.push(filterText);
      } else {
        checked.pop();
        checked.push(filterText);
      }
    } else if (filterText === 'delivery') {
      filteredItems = newArr.filter(item => item.delivery === true);
      if (checked.length === 0) {
        checked.push(filterText);
      } else {
        checked.pop();
        checked.push(filterText);
      }
    } else if (filterText === 'bestSelling') {
      const value = newArr.reduce((a, b) =>
        a.bestSelling > b.bestSelling ? a : b
      ).bestSelling;
      filteredItems = newArr.filter(item => item.bestSelling === value);
      if (checked.length === 0) {
        checked.push(filterText);
      } else {
        checked.pop();
        checked.push(filterText);
        console.log(checked);
      }
    } else {
      filteredItems = newArr;
      if (checked.length === 0) {
        checked.push(filterText);
        console.log(filterText);
      } else {
        console.log(checked.pop());
        checked.push(filterText);
        console.log(checked);
      }
    }
  }

  console.log(filteredItems);
  const displayArr = filterText ? filteredItems : array;

  return (
    <div>
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
      {displayArr.map(item => (
        <Product
          key={item.id}
          name={item.name}
          inStock={item.inStock}
          price={item.price}
          image={item.thumbnail}
          currency={item.currency}
          delivery={item.delivery}
          rating={item.bestSelling}
        />
      ))}
    </div>
  );
}

export default Category;
