import Layout from "../components/Layout";
import Header from "../components/Header";
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



export default function Home({}) {
  return (
    <>
      {/* <Header></Header> */}
      {/* <Layout></Layout> */}
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
        <div className="py-10 flex flex-col items-center space-y-7">
        <div className="font-bold text-3xl">Our Services</div>
        <div>LET&rsquo;S TEAM UP AND WORK TOWARDS SUCCESS!</div>
        </div>
        <div className="container flex flex-row bg-white flex-wrap h-96 w-100 ml-7 py-2 ">
          <div className="bg-white  basis-1/3 flex gap-x-3 "><Image  className="self-start" priority src={icon} alt="logo" height={50} width={50}></Image>
          <div><h3 className="font-semibold pb-2 pt-7">Website Development</h3><p>First impressions are last impressions. Our websites truly portray who we are as a company. Let us help you in making your vision come true!</p></div></div>
          <div className="bg-white basis-1/3 flex gap-x-2 "><Image className="self-start" src={setting} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Mobile Application Development
</h3><p>There are various forms and scales of mobile app development. Altering your application for iOS and/or android won’t be a problem for us!</p></div></div>
          <div className="bg-white basis-1/3 flex  gap-x-2 "><Image  className="self-start" src={badge} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2  pt-7">Quality Assurance</h3><p>Do you want your product or service to be right the first time? We want the same for you! Our team of skilled professionals follow all the key steps of the software development cycle to prevent any defects which might occur.</p></div></div>
          <div className="bg-white  basis-1/3 flex  gap-x-2 "><Image  className="self-start" src={cloud} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2  pt-7">Desktop App Development</h3><p>Our company can design, build and support complex websites and applications. Our company has over 40 specialists who use expert design techniques to create and support innovative digital experiences.</p></div></div>
          <div className="bg-white  basis-1/3 flex  gap-x-2"><Image  className="self-start" src={budget} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Search Engine Optimization</h3><p>Do you want more organic traffic on your website? We can make it happen! Almost every online experience begins with a search. With the increase in mobile internet usage, consumers use search engines to guide their decisions every day. Let us help you be at the top!</p></div></div>
          <div className="bg-white basis-1/3 flex  gap-x-3"><Image  className="self-start" src={customer} alt="logo" height={50} width={50}></Image><div><h3 className="font-semibold pb-2 pt-7">Business Branding</h3><p>Let us help you in establishing your company&rsquo;s entity! We create World-class logo design with best principles of visual hierarchy which will make your company stand out of the ordinary.</p></div></div>

        </div>
        <div className="flex h-50 w-100 justify-center mx-10 my-10">
        <button className="bg-white border border-blue hover:bg-blue hover:text-white rounded border-opacity-100 h-10 w-40">See all features</button>
        </div>
       <div className="first flex h-96 w-100 bg-orange gap-y-5 py-20 items-center ">
        <Image className="bg-transparent" src="https://img.freepik.com/free-photo/indoor-shot-positive-bearded-male-casual-red-t-shirt-points-with-index-finger-aside_273609-16274.jpg?w=740&t=st=1692101617~exp=1692102217~hmac=920652502265aacbb4545a29f0dc72ce7b640280c89ccf27ca62f2e97276e871" alt="man" height={574} width={574}></Image>
        <div>
        <h3 className="text-4xl font-bold pb-8 mx-44">WHY CHOOSE US?</h3>
             <p className="mx-44">What makes Panorama stand out of the ordinary isn&rsquo;t our history of providing exceptional work on time, rather building long lasting company-client relationships. We are a one stop shop for all your business technology needs. We are much more than a company, we are your business partner, just a phone call away, 24/7. Let&rsquo;s connect!</p>
             <button className="bg-gray hover:opacity-50 text-white px-3 py-3 ml-44 mt-8 rounded">Read More</button>
        </div>
       
       </div>
       <div className="second text-center">
        <h2 className="text-4xl font-bold py-10 ">ONLY THE BEST FOR YOUR BUSINESS!</h2>
        <p className="text-2xl gap-[4-rem] px-8 ">Our goal is to build lasting relationships with the people we work with, and to deliver outstanding results to bridge the gap between where they are now and where they want to be.</p>
       </div>
       <div className="third flex h-1/2 w-100 px-20 py-20 gap-x-12">
        <Image className="h-auto max-w-md" src={email} alt="logo" width={500} height={500}></Image>
        <p className="font-bold text-3xl">Achieve your marketing goals with <br></br>scalable,<div className="font-normal">personalized email automation.</div> </p>
       </div>
        <div className=" fourth flex px-20 py-20  h-96 w-100 gap-x-12" >
        <div className="font-semibold text-3xl">Start your website with Panorama today!  <p className="font-normal text-lg pt-5">
        We understand that even the best technology is only as good as the <br></br>people behind it. That’s why we offer expert, 24/7 support!
          </p></div>
        <Image src={tabs} alt="logo" height={800} width={600}></Image>
        </div>
        <div className="fifth flex px-20 gap-x-12 ">
            <Image src={fast} alt="logo" height={500} width={500}></Image>
            <p className="font-semibold text-3xl mx-40">Get started quickly, easily and at a minimal price!<div className="font-normal text-base py-8 text-left">You can choose from our wide selection of pre-designed themes, or you can create your own extraordinary website and get it up and running instantly!</div></p>
        </div>
        </main>
      </body>
    </>
  );
}
