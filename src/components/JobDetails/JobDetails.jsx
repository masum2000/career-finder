import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, InboxIcon, EnvelopeIcon, MapIcon, MapPinIcon} from '@heroicons/react/24/solid'

const JobDetails = () => {
    const { id } = useParams(); 
    const jobFeature = useLoaderData();
    const feature = jobFeature.find((feature) => feature.id === parseInt(id)); 

    return (
        <div className=" md:w-9/12 mx-auto ">
            <div>
            <h2 className='font-bold text-3xl text-center py-10'>Jobs Details</h2>
            </div>
            <div  className='sm:grid sm:grid-cols-5  gap-10'>
                <div className=" sm:col-3 col-span-3  space-y-4">
                    <h1><span className='font-bold '>Job Description:</span> {feature.job_description}</h1>
                   <p><span className='font-bold'>Job Responsibility:</span> {feature.job_responsibility}</p>
                   <p className='font-bold'>Educational Requirements:</p>
                   <p> {feature.educational_requirements}</p>
                   <p className='font-bold'>Experiences:</p>
                   <p>{feature.experiences}</p>
                </div>
                <div  className="sm:col-2 col-span-2 ">
                
                     <div className=' p-5 rounded bg-purple-200'>
                     <div>
                         <h1 className="font-bold ">Job Details</h1>
                         <hr className='border-gray-400 border-t-2 my-3'></hr>
                         <div className='flex items-center gap-1'>
                             <CurrencyDollarIcon className="h-5 w-5 text-gray-600"/>
                             <p><span className='font-bold'>Salary:</span> {feature.salary}</p>
                         </div>
                         <div className='flex items-center gap-1'>
                            <CalendarDaysIcon className="h-5 w-5 text-gray-600"/>   
                            <p className='my-2'><span className='font-bold '>Job Title:</span> {feature.job_title}</p>
                         </div>
                         
                     </div>
                     <div>
                        <h1 className='font-bold my-3'>Contact Information</h1>
                        <hr className='border-gray-400 border-t-2 my-3'></hr>
                        <div className='flex items-center gap-1'>
                            <PhoneIcon  className="h-4 w-4 text-gray-600"/>
                            <p><span className='font-bold'>Phone:</span> {feature.contact_information.phone}</p>
                        </div>
                           <div className='flex items-center gap-1 mt-2'>
                            <EnvelopeIcon className="h-4 w-4 text-gray-600"/>
                            <p className=''><span className='font-bold'>Email:</span> {feature.contact_information.email}</p>
                           </div>
                           <div className='flex items-center gap-1 mt-2'>
                            <MapPinIcon className="h-5 w-5 text-gray-600"/>
                            <p className=''><span className='font-bold'>Address:</span> {feature.location}</p>
                           </div>

                     </div>
                     </div>
                        <button className=" w-full text-white py-3 rounded mt-5 font-semibold bg-purple-600 ">Apply Now</button>
                 </div>
                     
            </div>
                
            
            
            
        </div>
    );
};

export default JobDetails;