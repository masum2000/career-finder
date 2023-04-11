import React from 'react';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'

const JobFeatureSingle = ({feature}) => {
    console.log(feature);
    const {company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = feature;
    return (
       <div>
         <div>
            
            <div className=' bg-gray-200 p-10 rounded space-y-5 shadow-xl mb-10 border border-purple-400 cursor-pointer'>
                <img src={company_logo} />
                <h2 className='font-bold text-xl'>{job_title}</h2>
                <p>{company_name}</p>
                <div className=''>
                   <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold">{remote_or_onsite}</button>
                   <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold ml-3">{fulltime_or_parttime}</button>
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
                <button className=" bg-purple-600 rounded md:p-2 p-1 text-white font-semibold">View Details</button>
                
            </div>
        </div>
       </div>
    );
};

export default JobFeatureSingle;