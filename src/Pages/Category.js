import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import prod from '../data/products';
import Product from '../Components/Product';

function Category() {
  const { id } = useParams();
  const catId = id;
  console.log(catId);
  const [array, setArray] = useState(
    prod.filter(item => item.categoryId === catId)
  );

  // console.log(id);
  console.log(array);

  const priceSort = () => {
    const newArray = [...array];
    newArray.sort((a, b) => a.price - b.price);
    // console.log(newArray);
    setArray([...newArray]);
  };

  return (
    <div>
      <h3>Filters</h3>
      <label htmlFor="p">
        Price
        <input type="checkbox" id="p" onClick={priceSort} />
      </label>
      <label htmlFor="p">
        Delivery
        <input type="checkbox" id="p" />
      </label>
      <label htmlFor="p">
        In Stock
        <input type="checkbox" id="p" />
      </label>
      {
        (console.log(array),
        array.map(item => (
          <Product
            key={item.id}
            name={item.name}
            inStock={item.inStock}
            price={item.price}
            image={item.thumbnail}
            currency={item.currency}
          />
        )))
      }
    </div>
  );
}

export default Category;
