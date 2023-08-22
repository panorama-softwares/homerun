import React from 'react'
import Image from 'next/image'
import img1 from './desktop.jpg'

export default function mobile() {
  return (
    <>
        <header className="h-80 w-100  bg-blue text-center">
        
        
        
        <div className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">DESKTOP APP DEVELOPMENT</h1>
        </div>
        
        </header>
        
        <div className='flex'>
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