import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobFeatureSingle from '../JobFeatureSingle/JobFeatureSingle';

const JobFeature = () => {
    const  jobFeature = useLoaderData();

    const [jobShowAll, setJobShowAll] = useState (false);

    const handleSeeAllJobs = () => {
        setJobShowAll(true);
    };

    const displayAllJob = jobShowAll ? jobFeature:jobFeature.slice(0,4);
    
    return (
        <div>
            <div>
             <div className="text-center py-10">
                 <h1 className=" font-bold text-4xl">Featured Jobs</h1>
                 <p className='py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             </div>
            </div>
            <div className='grid md:grid-cols-2  gap-6 '>
                {
                    displayAllJob.map(feature=> <JobFeatureSingle
                     key={feature.id}
                     feature={feature}
                    ></JobFeatureSingle>)
                }
            </div>
            <div className="text-center">
            {!jobShowAll && <button className="bg-purple-600 rounded md:p-2 p-1 text-white font-semibold" onClick={handleSeeAllJobs}>See All Jobs</button>}
                
            </div>
        </div>
    );
};

export default JobFeature;