import React, { useState } from 'react';
import { getStoredData } from '../../Utils/utils';
import AppliedJobsSingle from '../AppliedJobsSingle/AppliedJobsSingle';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState(getStoredData());
  
  
  console.log(jobs[0].id);
  return (
    <div className='className = md:w-9/12 mx-auto'>
          <div>
             <h2 className='font-bold text-3xl text-center py-10'>Applied Jobs</h2>
          </div>
          <div className=''>
                {
                    jobs.map(job=> <AppliedJobsSingle
                     job={job}
                    ></AppliedJobsSingle>)}
            </div>
    </div>
  );
};

export default AppliedJobs;