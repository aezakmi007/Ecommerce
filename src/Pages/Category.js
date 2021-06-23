import React from 'react';
import { useParams } from 'react-router-dom';
import prod from '../data/products';
import Product from '../Components/Product';

function Category() {
  const { id } = useParams();
  console.log(id);
  const catId = String(id);
  const arr = prod.filter(item => item.categoryId === catId);
  console.log(arr);
  return (
    <div>
      {arr.map(item => (
        <Product
          key={item.id}
          name={item.name}
          inStock={item.inStock}
          price={item.price}
          image={item.thumbnail}
          currency={item.currency}
        />
      ))}
    </div>
  );
}

export default Category;
