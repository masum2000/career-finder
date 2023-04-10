import React, { useEffect, useState } from "react";
import JobCategorySingle from "../JobCategorySingle/JobCategorySingle";

const Category = () => {
  const [jobs, setJobs] = useState([]);
  useEffect (() => {
    fetch('jobcategory.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  }, [])
  return (
    <div className="">
      <div className=" text-center py-10">
        <h1 className=" font-bold text-4xl">Job Category List</h1>
        <p className="py-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
      </div>
      <div className="grid md:grid-cols-4  gap-6">
         {
          jobs.map(job => <JobCategorySingle
          job = {job}
          ></JobCategorySingle>)
         }
      </div>
    </div>
  );
};

export default Category;
