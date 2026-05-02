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
            <div className='px-3 sm:px-4 md:px-5 lg:px-6 space-y-3 sm:space-y-4 mt-4 sm:mt-5'>
                <h3 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold px-2 sm:px-0'>
                    Learning Tips
                </h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-5'>

                    <div className='p-4 sm:p-5 space-y-4 sm:space-y-7 shadow-xl rounded-xl'>
                        <div className='rounded-full flex justify-center'>
                            <div className='bg-pink-100 mx-auto p-4 sm:p-5 rounded-full'>
                                <GoGoal className="text-xl sm:text-2xl" />
                            </div>
                        </div>
                        <h4 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold'>
                            Set Clear Goals
                        </h4>
                        <p className='text-center text-gray-500 text-sm sm:text-base'>
                            Define what you want to achieve before starting any course.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 space-y-4 sm:space-y-7 shadow-xl rounded-xl'>
                        <div className='rounded-full flex justify-center'>
                            <div className='bg-pink-100 mx-auto p-4 sm:p-5 rounded-full'>
                                <GoGoal className="text-xl sm:text-2xl" />
                            </div>
                        </div>
                        <h4 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold'>
                            Stay Consistent
                        </h4>
                        <p className='text-center text-gray-500 text-sm sm:text-base'>
                            Practice daily and maintain a regular learning schedule.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 space-y-4 sm:space-y-7 shadow-xl rounded-xl'>
                        <div className='rounded-full flex justify-center'>
                            <div className='bg-pink-100 mx-auto p-4 sm:p-5 rounded-full'>
                                <GoGoal className="text-xl sm:text-2xl" />
                            </div>
                        </div>
                        <h4 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold'>
                            Take Notes
                        </h4>
                        <p className='text-center text-gray-500 text-sm sm:text-base'>
                            Write down key concepts to improve retention and understanding.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 space-y-4 sm:space-y-7 shadow-xl rounded-xl'>
                        <div className='rounded-full flex justify-center'>
                            <div className='bg-pink-100 mx-auto p-4 sm:p-5 rounded-full'>
                                <GoGoal className="text-xl sm:text-2xl" />
                            </div>
                        </div>
                        <h4 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold'>
                            Apply Knowledge
                        </h4>
                        <p className='text-center text-gray-500 text-sm sm:text-base'>
                            Build projects to reinforce what you ve learned practically.
                        </p>
                    </div>

                </div>
            </div>
            <Instracter></Instracter>
            <Treandinapp></Treandinapp>
        </div>
    );
};

export default Hompage;