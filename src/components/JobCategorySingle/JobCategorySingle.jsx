import React from 'react';

const JobCategorySingle = ({job}) => {
    return (
        <div className=' flex flex-col bg-gray-200 p-8 rounded items-center '>
            <img className='w-16' src={job.image_url}></img>
            <h1 className='font-bold text-xl my-4'>{job.job_title}</h1>
            <p>{job.total_job}</p>
        </div>
    );
};

export default JobCategorySingle;