import React from 'react';
import Banner from '../components/Banner';
import Crouse from '../components/Crouse';
import { GoGoal } from 'react-icons/go';
import Instracter from '../components/Instracter';
import Treandinapp from '../components/Treandinapp';
 

const Hompage = () => {
    return (
        <div>
            <Banner></Banner>
             <Crouse></Crouse>
             <div className='p-4 space-y-3 mt-4 '>
                <h3 className='text-3xl font-bold'>Learning Tips</h3>

                <div className='grid grid-cols-4 gap-5'>

                <div className='p-5 space-y-7 shadow-xl '>
                   
                    <div className='rounded-full flex justify-center  '>
                         <div className='bg-pink-100 mx-auto p-5 rounded-full '>
                         <GoGoal />
                         </div>
                    </div>
                    <h4 className='text-center text-2xl font-bold '>Set Clear Goals</h4>
                    <p className='text-center text-gray-500'>Define what you want to achieve before starting any course.</p>

                </div>

                <div className='p-5 space-y-7 shadow-xl   '>
                   
                    <div className='rounded-full flex justify-center  '>
                         <div className='bg-pink-100 mx-auto p-5 rounded-full '>
                         <GoGoal />
                         </div>
                    </div>
                    <h4 className='text-center text-2xl font-bold '>Set Clear Goals</h4>
                    <p className='text-center text-gray-500'>Define what you want to achieve before starting any course.</p>

                </div>

                <div className='p-5 space-y-7 shadow-xl   '>
                   
                    <div className='rounded-full flex justify-center  '>
                         <div className='bg-pink-100 mx-auto p-5 rounded-full '>
                         <GoGoal />
                         </div>
                    </div>
                    <h4 className='text-center text-2xl font-bold '>Set Clear Goals</h4>
                    <p className='text-center text-gray-500'>Define what you want to achieve before starting any course.</p>

                </div>

                <div className='p-5 space-y-7 shadow-xl   '>
                   
                    <div className='rounded-full flex justify-center  '>
                         <div className='bg-pink-100 mx-auto p-5 rounded-full '>
                         <GoGoal />
                         </div>
                    </div>
                    <h4 className='text-center text-2xl font-bold '>Set Clear Goals</h4>
                    <p className='text-center text-gray-500'>Define what you want to achieve before starting any course.</p>

                </div>
                 
                </div>
             </div>
             <Instracter></Instracter>
             <Treandinapp></Treandinapp>
        </div>
    );
};

export default Hompage;