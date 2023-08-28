import React from 'react'
import Image from 'next/image'
import blg2 from './blg2.jpg'
export default function website() {
  return (
    <>
    <header className="h-60 w-100 flex flex-row bg-blue text-white py-10 text-center sm:flex-col sm:justify-center sm:items-center">
        <h1 className="font-bold text-5xl">WEBSITE  DEVELOPMENT</h1>
    </header>
    <body>
        <div className="main flex h-fit w-100 my-10 mx-20 tracking-wide leading-8 text-xl justify-evenly sm:flex-col md:flex-col lg:flex-row">
          <div className="container">
            <h1 className="font-semibold text-3xl my-5">Web Development</h1>
            <br></br>
            <p>Make your visions a reality! The backbone of a website is web development. It is what allows<br></br> the website to work. It all comes down to how the website functions and how potential buyers<br></br> navigate through it. Web programming, commonly referred to as web development, is the<br></br> process of creating dynamic web applications. It develops the website using a variety of web<br></br> languages and software tools.
            </p><br></br>
            <p>You may think, what makes Panorama stand out from its competitors? We take in delivering<br></br> your vision through our technique! Choosing the correct Web development firm can make a big<br></br> difference. It aids in the rise of relevant search traffic to websites and ensures that it benefits<br></br> your company.</p>
            <br></br>
            <p>Our services are simple and focused on the larger goal of your company&rsquo;s success. To construct<br></br> the most appropriate site, we discuss, plan, and understand your business needs!</p>
            <br></br>
            <p>Our company specializes in completing projects with great correctness and matching your<br></br> business needs. The sky&rsquo;s the limit with our skilled web developers. Everything from a simple<br></br> content website to the most complex E-commerce website is covered by our web development<br></br> services.
            </p> <br></br>
            <p>Our web development firm uses technologies such as React, Angular, Node js, PHP, and Java to<br></br> create user-friendly and practical solutions for managing your company&rsquo;s documentation,<br></br> processes, and workflows. We have a development team dedicated solely to front-end<br></br> development, which encompasses HTML5, javascript, responsive web, and so on.</p>
          </div>
          <Image className="h-64 w-60 place-self-center"  priority src={blg2} alt="logo" height={100} width={250}></Image>
        </div>
        <div className="flex flex-col ml-20 mr-20">
        <div className=" leading-8  text-xl sm:text-center  md:text-center lg:text-left lg:pr-80">
            <h1 className="font-semibold text-3xl py-8">Web Design That Is Unique</h1>
            <p>Our specialization is creating responsive web design that combines aesthetics and functionality to create seamless experiences across a variety of devices. Our designs are sleek, eye-catching, and intuitive, as well as precisely fitting all screen sizes, so users are impressed at the first glance.</p>
         </div>
         <div className="  leading-8 text-xl sm:text-center  md:text-center lg:text-left lg:pr-80">
            <h1 className="font-semibold text-3xl py-8">Designing A Landing Page</h1>
            <p>Our team includes skilled landing page designers who can create stunning landing pages. We make certain that the pages are visually appealing and contain all of the features necessary to make an impression on clients and keep them interested.</p>
         </div>
         <div className=" leading-8 text-xl sm:text-center  md:text-center lg:text-left lg:pr-80">
            <h1 className="font-semibold text-3xl py-8">Copywriting</h1>
            <p>We work on the content as well as the appearance of the websites. Our main goal is to tell engaging stories with a natural balance of text and graphics. At the same time, our copywriters ensure that the material matches the tone of voice of your company.</p>
         </div>
        </div>
        
    </body>
    </>
  )
}
