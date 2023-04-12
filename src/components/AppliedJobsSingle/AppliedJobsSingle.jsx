import React from 'react';
import {MapPinIcon, CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobsSingle = ({ job }) => {

    const { company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary, id } = job;

    return (
        <div>

            <div className='border-2 border-purple-400 p-5 mb-6 rounded-md'>
                <div className="grid grid-cols-5 gap-4 items-center ">
                    <div className="md:col-span-1 col-span-5 bg-gray-300 p-16 rounded-md">
                        <div><img className='' src={company_logo} /></div>
                    </div>
                    <div className="md:col-span-3 col-span-5 p-5 space-y-3">
                        <h1 className='font-bold'>{job_title}</h1>
                        <h1 className='font-bold text-gray-400'>{company_name}</h1>
                        <div className='flex'>
                            <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold">{remote_or_onsite}</button>
                            <button className="  bg-gray-200 rounded md:p-1 p-1 border border-purple-400 text-purple-600 font-semibold ml-3">{fulltime_or_parttime}</button>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex items-center gap-1'>
                                <MapPinIcon className="h-5 w-5 text-gray-600" />
                                <p>{location}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <CurrencyDollarIcon className="h-5 w-5 text-gray-600" />
                                <p>{salary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 col-span-5">
                        <Link to={`/${job.id}`}>
                          <button className=" bg-purple-600 rounded md:p-3 p-1 mt-4 text-white font-semibold">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>





            {/* <div className='bg-purple-200'>
                <img src={company_logo}/>
              
             </div>
             <div>
                <p>{job_title}</p>
                <p>{company_name}</p>
             </div> */}
        </div>
    );
};

export default AppliedJobsSingle;