import React from 'react';
import Category from '../Category/Category';
import JobFeature from '../JobFeature/JobFeature';

const Banner = () => {
    return (
        <div className=' grid  w-10/12 md:w-9/12 mx-auto md:py-10 py-0'>
            <div className='  grid grid-cols-1 md:grid-cols-5 gap-10 items-center'>
                <div className=' col-span-3 md:col-span-3'>
                    <h1 className='md:text-5xl text-3xl font-bold  '>Moving you closer to your dream  <span className='text-purple-500'> career.</span></h1>
                    <h3 className='my-4 '>Take control of your job search journey and manage your application process with ease. Our platform allows you to track your applications from start to finish, ensuring that you don't miss any crucial steps. Simplify your job search today and take charge of your future!</h3>
                    <button className="relative  bg-purple-600 rounded md:p-3 p-1 text-white font-semibold">Get Started</button>
                </div>
                <div className='col-span-2 md:col-span-2'>
                    <img className='' src="https://i.ibb.co/bsbFTBK/businessman.png"></img>
                </div>
            </div>
            <Category></Category>
            <JobFeature></JobFeature>
        </div>
    );
};

export default Banner;