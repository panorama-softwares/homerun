import React from 'react'
import Image from 'next/image'
import img6 from './custom.png'

export default function customweb() {
  return (
    <>
        
        <header className="h-96 w-100  bg-bluer text-center bg-blue bg-blend-multiply" style={{
        
        backgroundImage:`url('/img.jpg')` ,

        height:"400",
     }}>
    
        
        
        
        <div className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">CUSTOM WEB SOLUTION</h1>
        </div>
        
        </header>
        
        <div className='flex'>
        <div>
            <p className='leading-8  mx-20 mt-5  pt-20'>
            Apart from standalone websites, we have also successfully established a variety
             of web<br></br> portals, including  product and service listings for a variety of domains 
             such as matrimonial<br></br>, education, employment, etc. Simply said, we have the skills
              and capacity to design almost any <br></br>type of web portal you can think of - and we 
              can do it quickly!
            </p>

            
        </div>

        
        <div>

        </div>
        <Image   src={img6} alt='logo' height={350} width={350}></Image>
        </div>
        <div>
        <h1 className=' mx-16 pt-8 text-semibold text-3xl pl-2'>HOW WE WORK TO SOLVE YOUR PROBLEMS!</h1>
        <div className='pt-8'>
            <h1 className='text-4xl text-bold mx-16 my-4'>UNDERSTANDING</h1>
            <p className='leading-8 mx-16 mt-5 pl-2'>It is important for us to understand present flaws and new requirements our clients
             may have<br></br> while keeping the company type and it’s behaviour in mind in order to progress
            forward.</p>

        </div>
        
        <div className='pt-8'>
            <h1 className='text-4xl text-bold mx-16 my-4 pl-2'>BRAINSTROMING</h1>
            <p className='leading-8 mx-16 mt-5 pl-2'>Based on the knowledge, our team will assess the feasibility and challenges of 
                every new<br></br> problem that we face.</p>
        </div>
        <div className='pt-8'>
            <h1 className='text-4xl text-bold mx-16 my-4 pl-2'>SCOPE AND DESIGN</h1>
            <p className='leading-8 mx-16 mt-5 pl-2'>The scope will be designed in such a way which will meet every client’s request
                 while also<br></br> checking for future enhancements to provide the customer with a
                  forecast on his requirements.</p>
        </div>
        <div className='pt-8'>
            <h1 className='text-4xl text-bold mx-16 my-4 pl-2'>DEVELOPMENT</h1>
            <p className='leading-8 mx-16 mt-5 pl-2' >We will make sure the product developed will meet your expectations 
                and is delivered on time.</p>
        </div>

        <div className='pt-8 pb-10'>
            <h1 className='text-4xl text-bold mx-16 my-4 pl-2'>TESTING AND DEPLOY</h1>
            <p className='leading-8 mx-16 mt-5 pl-2'>Every solution undergoes a minimum of Three-Level testing to verify that it addresses all<br></br> aspects 
                and we make sure that there are no errors involved.</p>
        </div>
        </div>
        






        </>
  );
}