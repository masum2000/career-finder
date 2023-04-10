import React from 'react';
import businessman from '../../assets/businessman.jpg'

const Home = () => {
    return (
        <div className=' grid  bg-gray-200'>
            <div className=' grid grid-cols-2  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
                <div className='mt-28'>
                    <h1 className='text-5xl my-5 w-3/5'>Moving you closer to your <span className='text-indigo-500'> dream career.</span></h1>
                    <h3 className='my-4 w-2/3'>Take control of your job search journey and manage your application process with ease. Our platform allows you to track your applications from start to finish, ensuring that you don't miss any crucial steps. Simplify your job search today and take charge of your future!</h3>
                    <button className="relative py-3 bg-indigo-500 rounded p-4 text-white font-bold">Get Started</button>
                </div>
                <div className='w-full'>

                    <img src={businessman}></img>
                </div>
            </div>
        </div>
    );
};

export default Home;