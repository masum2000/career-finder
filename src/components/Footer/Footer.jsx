import React from 'react';

const Footer = () => {
    return ( 
        <div className='bg-gray-950  bottom-0 left-0 text-center md:text-start text-gray-600'>
            <div className=" w-full md:w-9/12 mx-auto divide-y">
               <div className="grid md:grid-cols-3 mt-10 ">
                      <div className="col-span-1  text-gray-300 py-10 my-10">
                          <h1 className='font-bold text-2xl'>Career Finder</h1>
                           <p className='mt-5 md:w-2/4'>Taking steps towards achieving your desired profession and working towards your career goals.</p>
                          <div>
                            <img className='mt-5 mx-auto md:mx-0' src="https://i.ibb.co/CsbLzLQ/Group9969.png" alt="Icons" />
                           </div>
                      </div>
                      <div className="grid md:grid-cols-4 sm:grid-cols-2 col-span-2 text-gray-300 gap-6 py-10  md:my-10">
                          <div className="space-y-2">
                            <p className='text-2xl font-bold'>Company</p>
                            <p>About Us</p>
                            <p>Work</p>
                            <p>Latest News</p>
                            <p>Careers</p>
                          </div>
                          <div className="space-y-2">
                             <p className='text-2xl font-bold'>Product</p>
                             <p>Prototype</p>
                             <p>Plans & Pricing</p>
                             <p>Customers</p>
                             <p>Integrations</p>
                          </div>
                          <div className="space-y-2">
                            <p className='text-2xl font-bold'>Support</p>
                            <p>Help Desk</p>
                            <p>Sales</p>
                            <p>Become a Partner</p>
                            <p>Developers</p>
                          </div>
                          <div className="space-y-2 ">
                            <p className='text-2xl font-bold'>Contact</p>
                            <p>Mirpur-10</p>
                            <p>+880-17*****575</p>
                            <p></p>
                            <p></p>
                          </div>
                      </div>
              </div>
              <div className=''></div>
              <div className=' md:flex  justify-between py-5 '>
                
                <div>© 2023 CareerFinder. All Rights Reserved  </div>
                <div>Powered by CareerFinder</div>
              </div>
           </div>
        </div>
        
    );
};

export default Footer;