import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [footers, setFooters] = useState ([]);

    useEffect (() => {
        fetch ('footer.json')
        .then(res => res.json())
        .then(data => setFooters(data))
    }, []);

    return (
        
        <div className='bg-gray-950  bottom-0 left-0 '>
            {/* <div class="w-9/12 mx-auto grid grid-cols-3">
                <div class="col-span-1 bg-gray-200 h-10">
                    <h1>Career Finder</h1>
                    <p>"Taking steps towards achieving your desired profession and working towards your career goals."</p>
                    <div>
                        <img src='../../assets/Icons/Group 9969.png'></img>
                    </div>
                </div>
                <div class="col-span-2 bg-gray-400 h-10">
                {
                footers.map(footer => <div>
                    <li>{footer.title}</li>
                    <li>{footer.features[0]}</li>
                    <li>{footer.features[1]}</li>
                    <li>{footer.features[2]}</li>
                    <li>{footer.features[3]}</li>

                </div>)
            }
                </div>
            </div> */}
            <div class=" w-9/12 mx-auto">
               <div class="grid md:grid-cols-3 mt-10 ">
                      <div class="col-span-1  text-gray-300 py-10 my-10">
                          <h1 className='text-3xl font-bold'>Career Finder</h1>
                           <p className='mt-5'>Taking steps towards achieving your desired profession and working towards your career goals.</p>
                          <div>
                            <img className='mt-5' src="../../../src/assets/Icons/Group9969.png" alt="Icons" />
                           </div>
                      </div>
                      <div class="grid md:grid-cols-4 sm:grid-cols-2 col-span-2 text-gray-300 gap-6 py-10  md:my-10">
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
                          <div className="space-y-2">
                            <p className='text-2xl font-bold'>Contact</p>
                            <p>Mirpur-10</p>
                            <p>+880-17*****575</p>
                            <p></p>
                            <p></p>
                          </div>
                      </div>
              </div>
           </div>
        </div>
        
    );
};

export default Footer;