import React from 'react'
import Image from 'next/image'
import soc from './socialmedia.jpg'

export default function social() {
  return (
    <>
       <header  className="h-60 w-100 flex flex-row bg-blue text-white py-10 text-center sm:flex-col sm:justify-center sm:items-center">
    <h1 className="font-bold text-5xl tracking-wide">SOCIAL MEDIA MARKETING</h1>
    </header>
    <body> 
        <div className="flex  h-max w-100 my-20 mx-24 text-justify text-xl sm:flex-col md:flex-col lg:flex-row">
            <div className="leading-8 pt-20">
                <p>We provide full-service social media management. As a result, we enhance your social media profile through high-quality material, daily activity, monitoring-engagement, and increasing followers. This solution will attract targeted followers, who will eventually convert into devoted customers and provide brand loyalty.</p>
            </div>
            <Image src={soc} alt="logo" height={350} width={350}></Image>
        </div>
        <div className="flex flex-col h-fit w-100 my-10 mx-20 text-xl justify-evenly">
        <div className=" leading-8 sm:text-center  md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">SOCIAL MEDIA ADVERTISING SERVICES</h1>
            <p>Our social media advertising services have been tested and proved to drive growth and work well in conjunction with our social media management service. As a result, when our clients use our services to build social advertisements, they typically receive better results at a lesser cost.</p>
            <span>While Facebook advertising is the most commonly used feature of this business, we can also run Instagram ads, LinkedIn ads, and other paid social ads. This solution makes use of your advertising spend to broaden your reach and direct targeted social media users to your website or landing page, all while tracking conversions and evaluating the metrics that matter.</span>
        </div>
        <div className=" leading-8 sm:text-center md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">EMAIL AND SMS MARKETING SERVICES</h1>
            <p>Every day, your consumers check their email. Our email marketing services will keep you at the top of your prospects minds and shorten your sales cycle. You can anticipate excellent content that leads prospects through your sales funnel to buy, whether we generate weekly newsletters to deliver to your subscribers or build up a drip sequence to send the proper automated emails at the right time.</p>
        </div>
        <div className=" leading-8 sm:text-center md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">SEARCH ENGINE OPTIMIZATION SERVICES</h1>
            <p>With our SEO services, you will be seen on search engines like Google, Bing, and Amazon for relevant queries. Does your website appear when someone types a search term relating to your product or service into one of those search engines? Through higher organic ranks, our search engine optimization marketing service and content marketing will deliver more quality clicks, leads, and sales.</p>
        </div>
        <div className=" leading-8 sm:text-center md:text-center lg:text-left lg:pr-80 text-xl">
            <h1 className="font-semibold text-4xl my-5">PPC MANAGEMENT SERVICES</h1>
            <p>Our PPC management services (also known as SEM or search engine marketing) stands for pay per click. Consider it the speedier, compensated version of SEO. With our pay per click management services, you can obtain immediate traffic to your website from search engines like Google, Bing, and Amazon by directly paying those search engines to place your website at the top of relevant search results.</p>
        </div>
        </div>
       
    </body>
    </>
  )
}
