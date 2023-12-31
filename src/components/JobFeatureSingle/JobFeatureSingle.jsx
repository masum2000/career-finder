import React from 'react';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobFeatureSingle = ({feature}) => {

    // console.log(feature);
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary,id} = feature;
    return (
       <div>
         <div>
            
            <div className=' bg-gray-300 p-10 rounded space-y-5 shadow-xl mb-10 border border-purple-400 cursor-pointer hover:bg-purple-400'>
                <img className='w-52' src={company_logo} />
                <h2 className='font-bold text-xl'>{job_title}</h2>
                <p>{company_name}</p>
                <div className=''>
                   <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold ml-3">{fulltime_or_parttime}</button>
                   <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold ml-3">{remote_or_onsite}</button>
                </div>
                <div className='flex gap-5'>
                   <div className='flex items-center gap-1'>
                      <MapPinIcon className="h-5 w-5 text-gray-600"/>
                       <p>{location}</p>
                   </div>
                    <div className='flex items-center gap-1'>
                    <CurrencyDollarIcon className="h-5 w-5 text-gray-600"/>
                    <p>{salary}</p>
                    </div>
                </div>
                {/* <Link to={`/${feature.id}`}>
                <button className=" bg-purple-600 rounded mt-3 md:p-2 p-1 text-white font-semibold">View Details</button>
                </Link> */}
                <Link to={`/${feature.id}`}><button className=" bg-purple-600 rounded md:p-3 p-1 mt-4 text-white font-semibold hover:bg-green-600 hover:text-black">View Details</button></Link>
                
            </div>
        </div>
       </div>
    );
};

export default JobFeatureSingle;