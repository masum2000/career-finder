import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    
    return (
        <section className='flex flex-col items-center justify-center h-screen p-16 bg-white text-gray-900'>
          <img className='w-2/6' src='https://i.ibb.co/DrX5DbQ/Notfound.jpg' />
         <Link
            to='/'
            className='px-8 py-3 mt-10 font-semibold rounded bg-purple-600 text-white'
          >
            Back to Home
          </Link>
    </section>
    );
};

export default ErrorPage;