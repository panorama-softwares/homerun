import React from 'react'
import Image from 'next/image'
import seo from './seo.jpg'

export default function search() {
  return (
    <>

    <header className="h-96 w-100  bg-bluer text-center bg-blue bg-blend-multiply" style={{
        
        backgroundImage:`url('/img.jpg')` ,

        height:"400",
     }}>
    <div className="h-60 w-100  text-white px-20 py-10 text-center">

    <header  className="h-60 w-100 flex flex-row bg-blue text-white py-10 text-center sm:flex-col sm:justify-center sm:items-center">

    <h1 className="font-bold text-5xl tracking-wide">SEARCH ENGINE OPTIMIZATION</h1>
    </div>
    </header>
    <body>
        <div className="flex h-max w-100 my-10 mx-10 tracking-wide leading-8 px-8 text-xl sm:flex-col md:flex-col lg:flex-row">
            <div><p className="pt-24">More growth will be delivered by our Search Engine Optimization solution. Rankings for additional keywords! Increased traffic, leads, and sales! More expansion than you ever believed SEO could provide. All with greater openness and love from our account managers!</p></div>
            <Image className="" priority src={seo} alt="logo" height={350} width={350}></Image>
        </div>
        <div className="flex flex-col h-max w-100 my-10 mx-20 text-xl justify-evenly">
        <div className="leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
          <h1 className="font-semibold text-4xl my-5">LOCAL SEO</h1>
          <p>You might have the biggest store on Main Street, but if you don&rsquo;t appear in local searches, you&rsquo;re missing out on a lot of customers and sales.</p>
        </div>
        <div className=" leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
          <h1 className="font-semibold text-4xl my-5">CONTENT MARKETING</h1>
          <p>Consider the effect of one billion people on a single platform. One website where individuals may congregate, converse, communicate, share, and connect.</p>
        </div>
        <div className=" leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
          <h1 className="font-semibold text-4xl my-5">GUEST POSTING</h1>
          <p>Panorama understands the value of trust and reputation as an SEO firm with tons of experience.</p>
        </div>
        <div className="leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">ECOMMERCE SEO</h1>
            <p>Panorama is one of the few SEO firms with extensive experience in SEO for eCommerce websites.</p>
        </div>
        <div className=" leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">ONLINE REPUTATION MANAGEMENT</h1>
            <p>It&rsquo;s tough to control what people say about you once you&rsquo;re on the internet. For all you know, you could be taking all the necessary steps on your end, but there&rsquo;s always that one angry client who feels entitled to vent in a public place, and things quickly spiral out of hand. This is why we are here to help.</p>
        </div>
        </div>
        
    </body>
    </>
  )
}
