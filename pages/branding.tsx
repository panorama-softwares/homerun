import React from 'react'
import Image from 'next/image'
import img2 from './branding.jpg'

export default function mobile() {
  return (
  <>
  <header className="h-96 w-100  bg-bluer text-center bg-blue bg-blend-multiply" style={{
        
        backgroundImage:`url('/img.jpg')` ,

        height:"400",
     }}>
    <div className="h-60 w-100  text-white px-20 py-10 text-center">
    <h1 className="font-bold text-5xl tracking-wide">BUSINESS BRANDING</h1>
    </div>
    </header>

        

        <div className='flex '>

        
        <div className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">BUSINESS BRANDING</h1>     </div>
        
        </header>
        <div className='flex text-xl leading-8'>

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

        <div className="text-xl leading-8">
            <h1 className='bold text-3xl mx-20 font-bold mb-7'>BRANDING SERVICES</h1>
            <ul className="list-disc mx-20 pb-10">
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