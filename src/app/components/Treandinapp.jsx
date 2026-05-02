import React from 'react';
import Crouse from './Crouse';
import Cartpage from './Cart';

const Treandinapp = async() => {
      const res = await fetch('http://localhost:3000/Data.json')
  const data = await res.json()
    return (
        <div className="space-y-4 mt-4">
      <h3 className='text-3xl font-bold m-5'>Treading Apps</h3>
       
        
        <div className="grid grid-cols-3 gap-5">
      {
         data.slice(3, 6).map(d => ( <Cartpage key={d.id} d={d} />))
      }
      </div>
      
    </div>
    );
};

export default Treandinapp;