/* eslint-disable prefer-template */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CategoryPage.css';

function Categ({ name, desc, id }) {
  return (
    <div className="card">
      <img
        className={
          'card__image ' + (name === 'Headphones' ? 'headPhone__image' : '')
        }
        src={
          name === 'Keyboards'
            ? 'https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg'
            : 'https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg'
        }
        alt="xyz"
      />
      <div className="card___content">
        <h1>{name}</h1>
        <p>{desc}</p>
        <div className="card__info">
          <div>
            <Link to={`/categories/${id}`}>Buy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categ;
