import Layout from "../components/Layout";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import icon from '../public/rocket.svg';
import setting from './settings.svg';
import badge from './badge.svg';
import cloud from './computing-cloud.svg'
import budget from './budget.svg'
import customer from './customer-service.svg'
import email from './email.svg'
import tabs from './tabs.svg'
import fast from './fast.svg'
import social from './social.svg'
import video from './video.svg'
import analysis from './analysis.svg'
import mail from './mail-box.svg'
import tool from './tool-box.svg'
import advertise from './advertising.svg'

export default function Home({}) {
  return (
    <>   
      <header className="h-96 w-100 px-20 bg-blue py-20 text-center" style={{
    backgroundImage: `url('./back.png')`,
     height: "900",
    }}>
        <div className="flex  justify-center flex-col">
          <h1 className="text-4xl font-bold text-white">EXCEPTIONAL QUALITY WORK FOR YOUR BRAND!</h1>
          <div>
            <h4 className=" text-2xl p-7 text-white">Professional quality assessment methods backed by next-generation testing technology to deliver faster digital assurance for your business!</h4>
          </div>
        </div>
      </header>
      <body>
        <main>
        <div className="py-10 flex flex-col items-center space-y-7 flex-wrap">
        <div className="font-bold text-3xl">Our Services</div>
        <div>LET&rsquo;S TEAM UP AND WORK TOWARDS SUCCESS!</div>
        </div>
        <div className="container flex flex-row bg-white flex-wrap h-fit w-100 ml-7 py-2 mb-28">

          <div className="bg-white  basis-1/3 flex gap-x-3 "><Image className="self-start" priority src={icon} alt="logo" height={50} width={50}></Image>
          <div><h3 className="font-semibold pb-2 pt-7">Website Development</h3><p>First impressions are last impressions. Our websites truly portray who we are as a company. Let us help you in making your vision come true!</p></div></div>
            
          <div className="bg-white basis-1/3 flex gap-x-2 "><Image className="self-start" src={setting} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Mobile Application Development</h3><p>There are various forms and scales of mobile app development. Altering your application for iOS and/or android won’t be a problem for us!</p></div></div>

          <div className="bg-white basis-1/3 flex  gap-x-2 "><Image  className="self-start" src={badge} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2  pt-7">Quality Assurance</h3><p>Do you want your product or service to be right the first time? We want the same for you! Our team of skilled professionals follow all the key steps of the software development cycle to prevent any defects which might occur.</p></div></div>

          <div className="bg-white  basis-1/3 flex  gap-x-2 "><Image  className="self-start" src={cloud} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2  pt-7">Desktop App Development</h3><p>Our company can design, build and support complex websites and applications. Our company has over 40 specialists who use expert design techniques to create and support innovative digital experiences.</p></div></div>

          <div className="bg-white  basis-1/3 flex  gap-x-2"><Image  className="self-start" src={budget} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Search Engine Optimization</h3><p>Do you want more organic traffic on your website? We can make it happen! Almost every online experience begins with a search. With the increase in mobile internet usage, consumers use search engines to guide their decisions every day. Let us help you be at the top!</p></div></div>

          <div className="bg-white basis-1/3 flex  gap-x-3"><Image  className="self-start" src={customer} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Business Branding</h3><p>Let us help you in establishing your company&rsquo;s entity! We create World-class logo design with best principles of visual hierarchy which will make your company stand out of the ordinary.</p></div></div>
        
          <div className="bg-white basis-1/3 flex  gap-x-3"><Image  className="self-start" src={mail} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Graphic Designing</h3><p>It&lsquo;s a competitive world out there, and making an outstanding first impression is vital for getting across your objectives and establishing a long lasting relationship with potential clients.</p></div></div>

          <div className="bg-white basis-1/3 flex  gap-x-3"><Image  className="self-start" src={tool} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Custom Web Solution</h3><p>As an experienced and professional custom web design company, we have a wealth of experience in all elements of web design (including graphics, programming, animation, flash, usability, etc.).</p></div></div>
       
          <div className="bg-white basis-1/3 flex  gap-x-3"><Image  className="self-start" src={advertise} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Social Media Marketing</h3><p>If you&lsquo;re lacking time, resources or a team to handle this domain, then we have got you covered! Leave it to us to generate quality leads to meet your audience goals!</p></div></div>
        </div>
        
        
      
        <div className="first flex h-fit w-100 bg-orange  mt-16 px-10 space-x-32">
         
          <Image className="object-contain" src="https://img.freepik.com/free-photo/indoor-shot-positive-bearded-male-casual-red-t-shirt-points-with-index-finger-aside_273609-16274.jpg?w=740&t=st=1692101617~exp=1692102217~hmac=920652502265aacbb4545a29f0dc72ce7b640280c89ccf27ca62f2e97276e871" alt="man" height={380} width={380}></Image>
         
        
          <div className="container py-10">
              <h3 className="text-4xl font-bold pb-5">WHY CHOOSE US?</h3>
              <p >What makes Panorama stand out of the ordinary isn&rsquo;t our history of <br></br>providing exceptional work on time, rather building long lasting company-<br></br>client relationships. We are a one stop shop for all your business<br></br> technology needs. We are much more than a company, we are your<br></br> business partner, just a phone call away, 24/7. Let&rsquo;s connect!</p>
              <button className="bg-gray hover:opacity-50 text-white px-3 py-3 ml-44 mt-8 rounded"><Link href="/about">Read More</Link></button>
          </div>
        </div>
        <div className="second text-center my-20">
         <h2 className="text-4xl font-bold py-10 ">ONLY THE BEST FOR YOUR BUSINESS!</h2>
         <p className="text-2xl gap-[4-rem] px-8 ">Our goal is to build lasting relationships with the people we work with, and to deliver outstanding results to bridge the gap between where they are now and where they want to be.</p>
        </div>
        <div className="six flex h-1/2 w-100 justify-between py-20 px-20 leading-7">
          <p className="font-bold text-3xl">Product is what you are marketing<br></br> everyday <span className="font-normal">personalized email<br></br> automation.</span></p>
          <Image className="animate-bounce ease-linear duration-1000" src={social} alt="logo" height={400} width={400}></Image>
        </div>
        <div className="seven flex h-1/2 w-100 justify-between px-20 py-20 leading-7">
         <Image className="animate-bounce duration-1000" src={video} alt="" height={400} width={400}></Image>
         <p className="font-bold text-3xl">Highly Customizable Campaign <br></br>Report Data, <span className="font-normal">personalized email<br></br> automation.</span></p>
        </div>
        <div className="eight flex h-1/2 w-100 justify-between px-20 py-20 leading-7">
         <p className="font-bold text-3xl">Get Actionable Insights. Purpose<br></br> Built Trading Platform, <span className="font-normal">personalized<br></br>email automation.</span></p>
         <Image className="animate-bounce duration-1000" src={analysis} alt="logo" height={400} width={400}></Image>
        </div>
        <div className="third flex h-1/2 w-100 px-20 py-20 gap-x-12 justify-between">
         <Image className="h-auto max-w-md animate-bounce duration-1000" src={email} alt="logo" width={500} height={500}></Image>
         <p className="font-bold text-3xl">Achieve your marketing goals with <br></br>scalable,<div className="font-normal">personalized email automation.</div> </p>
        </div>
        <div className="fourth flex px-20 py-20  h-96 w-100 gap-x-12 justify-between" >
        <div className="font-semibold text-3xl">Start your website with Panorama today!  <p className="font-normal text-lg pt-5">
        We understand that even the best technology is only as good as the <br></br>people behind it. That’s why we offer expert, 24/7 support!
          </p></div>
        <Image className="animate-bounce duration-1000" src={tabs} alt="logo" height={400} width={400}></Image>
        </div>
        <div className="fifth flex px-20 gap-x-12 justify-between">
            <Image className="animate-bounce duration-1000" src={fast} alt="logo" height={500} width={500}></Image>
            <p className="font-semibold text-3xl mx-40">Get started quickly, easily and at a minimal price!<div className="font-normal text-base py-8 text-left">You can choose from our wide selection of pre-designed themes, or you can create your own extraordinary website and get it up and running instantly!</div></p>
        </div>
        </main>
      </body>
    </>
  );
}

