import React from 'react';
import businessman from '../../assets/businessman.jpg'
import Feature from '../Feature/Feature';
import Category from '../Category/Category';

const Banner = () => {
    return (
        <div className=' grid  w-9/12 mx-auto py-10'>
            <div className='  grid grid-cols-1 md:grid-cols-5 gap-10 items-center'>
                <div className='mt-28 col-span-3 md:col-span-3'>
                    <h1 className='text-5xl my-5 '>Moving you closer to your <span className='text-indigo-500'> dream career.</span></h1>
                    <h3 className='my-4 '>Take control of your job search journey and manage your application process with ease. Our platform allows you to track your applications from start to finish, ensuring that you don't miss any crucial steps. Simplify your job search today and take charge of your future!</h3>
                    <button className="relative py-3 bg-indigo-500 rounded p-4 text-white font-bold">Get Started</button>
                </div>
                <div className='col-span-2 md:col-span-2'>
                    <img className='rounded-lg' src={businessman}></img>
                </div>
            </div>
            <Category></Category>
            <Feature></Feature>
        </div>
    );
};

export default Banner;