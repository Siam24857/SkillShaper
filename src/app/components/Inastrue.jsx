import Image from 'next/image';
import React from 'react';
import { GoGoal } from 'react-icons/go';

const Inastrue = ({d}) => {
    return (
        <div>
             <div className='p-5 space-y-5 shadow-xl   '>
                               
                                <div className='rounded-full flex justify-center  '>
                                     <div className='  mx-auto p-5 rounded-full '>
                                      <img className='rounded-full' src={d.image}  alt='image of instructor'/> 
                                     </div>
                                </div>
                                <h4 className='text-center text-2xl font-bold '>{d.name}</h4>
                                <p className='text-center text-gray-500 font-bold'>{d.expertise}</p>
                                <p className='text-center  text-xl text-amber-500 font-bold'>courses: {d.courses}</p>
            
                            </div>
        </div>
    );
};

export default Inastrue;