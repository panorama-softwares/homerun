import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function native() {
  return (
    <>
    <div className="pl-20 py-20 pr-56 leading-8">
        <h1 className="font-semibold text-3xl pb-10">NATIVE VS HYBRID APPLICATIONS</h1>
        <Link className="text-off hover:text-blue" href="/response">Leave a Comment</Link>
        <p>The smartphone industry has grown significantly in recent years, and the debate over native vs hybrid app development is perhaps the most heated topic among app developers.</p>
        <br></br>
        <span>The share of mobile phone traffic increased to 52.2 percent last year, demonstrating how useful and attractive app development is.</span>
        <br></br>
        <span>For many people, the availability of affordable cell phones and access to the internet has made a huge difference. People began to rely on smartphones, making it tough for developers to decide whether native app development or hybrid app development is best for their app.</span>
    </div>
    <div className="pl-56 pb-10">
    <Image src="/Cool Kids - High Tech.png" alt="logo" height="350" width="350"></Image>
    </div>
   
    <div className="pl-20 pb-10 pr-56 leading-8">
        <h1 className="font-semibold text-3xl pb-10">BASIC INFORMATION</h1>
        <h1 className="font-semibold text-3xl pb-10">NATIVE APPLICATIONS</h1>
        <p>A native app is a mobile application created exclusively for an Android or iOS operating system.</p>
        <br></br>
        <span>The app is built according to the OS&rsquo;s technical and user experience guidelines, so it performs faster and has a comparable look and feel to the majority of the other native apps on the device. As a result, the end-user is more likely to learn how to navigate and utilise the app more quickly.</span>
        <br></br>
        <span>Native applications provide the advantage of instantly accessing and exploiting the user&rsquo;s device&rsquo;s built-in features, such as the contact book, GPS, and camera.</span>
        <br></br>
        <span>In a nutshell, native apps are designed in accordance with the user&rsquo;s operating system&rsquo;s guidelines.</span>
    </div>
    <div className="pl-20 pt-10 pr-56 leading-8">
        <h1 className="font-semibold text-3xl pb-10">HYBRID/CROSS-PLATFORM APPLICATIONS</h1>
        <p>Websites are combined into a native wrapper, and hybrid apps rely on cross-platform functionality.</p>
        <br></br>
        <span>Those applications appear to be native to your iOS device, but they aren&rsquo;t. They&rsquo;re usually limited to controls and navigational features, and they&rsquo;re powered by a company&rsquo;s website.</span>
        <br></br>
        <span>A hybrid app, on the other hand, is a web app developed with HTML5 and JavaScript and wrapped in a native vessel that loads the majority of the data on the page.</span>
        <br></br>
        <span>While native apps are designed with programming languages that are only supported by a single platform, hybrid apps are created with a single core code that works across both platforms. The development method is the major distinction between native and hybrid.</span>
    </div>
    <div className="pl-20 pt-10 pr-56 leading-8">
        <h1 className="font-semibold text-3xl pb-10">CONCLUSION</h1>
        <p>Both apps have their own set of advantages and disadvantages. However, one thing is certain: native app development is superior to hybrid app development. Hybrid apps are useful for folks on a small budget, but they are not the best option if you have a larger budget. Users are the ultimate decision-makers, thus you must present them with a fantastic interactive app with fantastic UI/UX, which is only feasible with Native apps.</p>
        <h1 className="font-semibold py-10">By- Riya Datta</h1>
    </div>
    </>
  )
}
