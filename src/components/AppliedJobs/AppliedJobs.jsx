import React, { useState } from 'react';
import { getStoredData } from '../../Utils/utils';
import AppliedJobsSingle from '../AppliedJobsSingle/AppliedJobsSingle';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState(getStoredData());
  const [filter, setFilter] = useState('All');
  
  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };
  
  return (
    <div className='className = md:w-9/12 w-11/12 mx-auto'>
          <div>
             <h2 className='font-bold text-3xl text-center py-10'>Applied Jobs</h2>
          </div>
          <div className='text-center py-4'>
            <button className='bg-purple-600 text-white p-2 m-2  font-semibold rounded hover:bg-green-600 hover:text-black' onClick={() => handleFilterChange('All')}>All Jobs</button>
            <button className='bg-purple-500 text-white p-2 m-2  font-semibold rounded hover:bg-green-500 hover:text-black' onClick={() => handleFilterChange('Full-time')}>Full Time</button>
            <button className='bg-purple-400 text-white p-2 m-2  font-semibold rounded hover:bg-green-300 hover:text-black' onClick={() => handleFilterChange('Part-time')}>Part Time</button>
          </div>
          <div className=''>
                {
                    jobs.filter(job => filter === 'All' ? true : job.fulltime_or_parttime === filter).map(job=> <AppliedJobsSingle
                     job={job}
                     key={job.id}
                    ></AppliedJobsSingle>)}
            </div>
    </div>
  );
};

export default AppliedJobs;
