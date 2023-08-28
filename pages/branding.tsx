import React from 'react'
import Image from 'next/image'
import img2 from './branding.jpg'

export default function mobile() {
  return (
  <>
  <header  className="h-60 w-100 flex flex-row bg-blue text-white py-10 text-center sm:flex-col sm:justify-center sm:items-center">
        
        
        
        <div className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">BUSINESS BRANDING</h1>     </div>
        
        </header>
        <div className='flex pb-10 text-xl leading-8 sm:text-center sm:flex-col md:flex-col lg:flex-row lg:text-left lg:pr-48 pl-24'>
            <div>
            <p className='leading-8  mx-20 mt-5  pt-20'>
            In business, reputation is everything and we are here to help you to make
             your online reputation great. We create World-class logo design with best
              principles of visual hierarchy. We also help for Re-branding to give 
              your business a new boost.<br></br>

             We&rsquo;ve been building websites and mobile applications for a while 
             now, so we can help design, develop and manage your product development. 
             The ultimate goal for any product is to help you get new customers 
             and increase your revenue and we utilize technology to bring results to grow your business.
            </p>
            </div>
            <Image className="h-96 w-90  pt-12 place-self-center mr-4" src={img2} alt="logo" height={350} width={400} ></Image>
        </div>

        <div className="text-xl leading-8 sm:text-center md:text-center lg:text-left lg:ml-44">
            <h1 className='bold text-3xl font-bold mb-7'>BRANDING SERVICES</h1>
            <ul className="list-disc  pb-10">
                <li>Logo Designing</li>
                <li>Social Media Management</li>
                <li>Website hosting</li>
                 <li>Our web solutions</li>
                 <li>Custom website design and innovative solutions</li>
                  <li>Search Engine Optimization (SEO)</li>
            </ul>
        </div>
  
  
  
  </>
  )}