import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Cartpage = ({d}) => {

    return (
        <div>
            <div className="card bg-base-100 w-full sm:w-80 md:w-88 lg:w-96 shadow-sm">
                <figure>
                    <img
                        src={d.image}
                        alt="Shoes"
                        className="w-full h-48 sm:h-52 md:h-56 lg:h-64 object-cover"
                    />
                </figure>
                <div className="card-body p-4 sm:p-5">
                    <h2 className="card-title text-base sm:text-lg md:text-xl lg:text-xl line-clamp-2">
                        {d.title}
                    </h2>
                    <p className="text-sm sm:text-base">{d.instructor}</p>
                    <p className='flex items-center gap-2 text-sm sm:text-base'>
                        <span className='text-yellow-400'><FaStar /></span>
                        {d.rating}
                    </p>
                    <div className="card-actions justify-end mt-2">
                        <Link href={`/CrouseDettails/${d.id}`}>
                            <button className="btn btn-primary btn-sm sm:btn-md">
                                Show Dettails
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartpage;