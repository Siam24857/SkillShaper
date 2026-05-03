import React from 'react';
import Inastrue from './Inastrue';
import instructorData from '@/Instructor.json'; 

const Instracter = async() => {
  const data = instructorData;  
  
  return (
    <div className='mt-5 sm:mt-6 md:mt-7 lg:mt-7 space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-5 px-3 sm:px-4 md:px-5 lg:px-5'>
      <h4 className='text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold'>
        Top Instructors
      </h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-4'>
        {
          data.map(d => ( <Inastrue key={d.id} d={d} />))
        }
      </div>
    </div>
  );
};

export default Instracter; 