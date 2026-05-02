import React from 'react';
import Inastrue from './Inastrue';

const Instracter = async() => {
      const res = await fetch('http://localhost:3000/Instructor.json')
  const data = await res.json()
    return (
        <div className='mt-7 space-y-5'>
            <h4 className='text-2xl font-bold'>Top Instructors</h4>
            <div className='grid grid-cols-4 gap-4'>
            {
                     data.map(d => ( <Inastrue key={d.id} d={d} />))
            }
            </div>
        </div>
    );
};

export default Instracter;