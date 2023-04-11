import React from 'react';

const JobCategorySingle = ({job}) => {
    
    return (
        <div className=' flex flex-col bg-gray-200 py-12 rounded items-center shadow-xl mb-10 border border-purple-400 cursor-pointer'>
            <img className='w-16' src={job.image}/>
            <h1 className='font-bold text-xl my-4'>{job.job_title}</h1>
            <p>{job.total_job}</p>
        </div>
    );
};

export default JobCategorySingle;