import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobCategorySingle from '../JobCategorySingle/JobCategorySingle';
import JobFeatureSingle from '../JobFeatureSingle/JobFeatureSingle';

const JobFeature = () => {
    const  jobFeature = useLoaderData()
    
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
                    jobFeature.map(feature=> <JobFeatureSingle
                     key={feature.id}
                     feature={feature}
                    ></JobFeatureSingle>)
                }
            </div>
            
        </div>
    );
};

export default JobFeature;