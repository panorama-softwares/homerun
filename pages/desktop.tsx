import React from 'react'
import Image from 'next/image'
import img1 from './desktop.jpg'

export default function mobile() {
  return (
    <>

        <header className="h-96 w-100  bg-blue text-center bg-blue bg-blend-multiply" style={{
        
        backgroundImage:`url('/img.jpg')` ,

        height:"400",
     }}>
        
        
        
        <header  className="h-60 w-100 flex flex-row bg-blue text-white py-10 text-center sm:flex-col sm:justify-center sm:items-center">

        <div className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">DESKTOP APP DEVELOPMENT</h1>
        </div>
        
        </header>
        
        <div className='flex text-xl leading-8 sm:text-center sm:flex-col md:flex-col lg:flex-row lg:text-left lg:pr-80 pl-24'>
        <div >
        <p className='leading-8  mx-20 mt-5  pt-20'>Our company can architect, build and support 
        sophisticated websites & applications. We are a company of <br></br>specialists
         who utilize expert design techniques and custom web development to 
         craft and support innovative <br></br>digital experiences.</p>
        

         <br></br><p className='leading-8  mx-20  pb-20'>Since the beginning, our clients have hired 
         us to help them with Solving Difficult Technical Challenges; <br></br>Producing Intuitive, 
         Custom, Interactive Design; Innovative, Complex Web Development; 
         Ongoing Maintenance & Support.</p>
         </div>
         
      
        <Image className="h-96 w-80  pt-12 place-self-center" src={img1} 
        alt="logo" height={300} width={350} ></Image>

        
        
         </div>

        </>
  )}