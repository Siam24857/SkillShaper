import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Allcrouse = ({G}) => {
    return (
        <div>
               
                    <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={G.image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{G.title}</h2>
            <p>{G.instructor}</p>
            <p className='flex items-center gap-2'><span className='text-yellow-400'><FaStar /></span>{G.rating}</p>
            <div className="card-actions justify-end">
             <Link href={`/CrouseDettails/${G.id}`}> <button className="btn btn-primary">Show Dettails</button></Link>
            </div>
          </div>
        </div>
                </div>
    );
};

export default Allcrouse;