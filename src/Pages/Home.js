import React, { useState } from 'react';
import categories from '../data/categories';
import Categ from '../Components/Categ';

function Home() {
  const [data] = useState(categories);
  return (
    <div>
         {data.map(item => (
        <Categ key={item.id} name={item.name} desc={item.description} id = {item.id}/>
      ))}
    </div>
  )
}

export default Home
