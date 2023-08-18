import React from 'react'
import Image from 'next/image'
import img from './mobile.jpg'

export default function mobile() {
  return (
    <>
        <header className="h-80 w-100  bg-bluer text-center">
        <div className="bg-blur">
        
        
        <div 
        className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">MOBILE APPLICATION DEVELOPMENT</h1>
        </div>

        
        </div>
        </header>
        <div className="flex h-max w-100 my-10 mx-10 pl-5">   
        <div>
        <h1 className="pt-20 text-black pb-3 font-semibold text-4xl ">Mobile Development</h1>
        <p className='leading-8'>Mobile app development comes in a variety of shapes and sizes. Your app may necessitate native application
       development in iOS and/or Android; this is not a problem; we&rsquo;ve built many native apps. We create mobile
      apps for a variety of industries, including IoT (Internet of Things), finance, healthcare, on-demand, 
      travel, and eCommerce.</p><br></br><p>We create innovative custom mobile applications with the goal of providing the 
      best User Experience possible. We work closely with you to understand your company&rsquo;s operations, 
      short- and long-term goals, customers, and culture. The end result is a customised solution that 
      exceeds the expectations of your end users.</p>
      
    </div>
    <Image className=" h-80 w-90 pt-12 place-self-center" src={img} alt="logo" height={300} width={350} ></Image>
    </div>
    <div>
      <h1 className='pl-8 pt-20 text-black pb-3 font-semibold text-4xl'>Android/IOS Application Development</h1>
      <p className='leading-8 my-5 mx-10'>
      Our skilled Android app developers create the best apps for the world&rsquo;s largest app store. We develop 
      Android apps that are well-known.Our iPhone app developers create high-quality iOS apps for tech 
      enthusiasts. We create interactive apps that pique the user&rsquo;s interest.
      </p>
      </div>
      <div className='pb-20'>
      <h1 className='pl-8 pt-20 text-black pb-3 font-semibold text-4xl '>Progressive Web Applications</h1>
      <p className='leading-8 mx-10 my-5 pb-15'>By avoiding app store delivery and app installation, PWAs provide an alternative to traditional mobile app development. PWAs are web applications which use browser capabilities to provide an 'app-like' user experience, such as working offline, running a background process, and adding a link to the device home screen. We have worked on frameworks 
        such as Polymer js and have been a part of a core development team for a major travel company.</p>
        </div>
        
    </>
  )
}
