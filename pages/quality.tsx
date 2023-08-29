import React from 'react'
import Image from 'next/image'
import pic from './quality.jpg'

export default function quality() {
  return (
    <>
    <header className="h-96 w-100  bg-bluer text-center bg-blue bg-blend-multiply" style={{
        
        backgroundImage:`url('/img.jpg')` ,

        height:"400",
     }}>

    <h1 className="font-bold text-5xl h-60 w-100 text-white px-24 py-10 text-center">QUALITY ASSURANCE</h1>
    </header>
    <body>
        <div className="flex h-max w-100 my-10 mx-20">
        <div className="leading-8">
            <h1 className="font-semibold text-4xl my-5">Quality Assurance</h1>
            <p>QA Testing is another name for Quality Assurance. Quality assurance (QA) is described as an activity that ensures an organisation provides the best product or service to its consumers.</p>
            <br></br>
            <p>It appears that software quality assurance is all about evaluating software based on functionality, performance, and adaptability, nevertheless, software quality assurance encompasses the quality of the process used to design, test, and distribute the software.</p>
            <br></br>
            <p>The Software Development lifecycle encompasses requirements management, software design, coding, testing, and release management, etc.</p>
        </div>
        <Image className="mx-5 h-80 w-80 place-self-center"  priority src={pic} alt="logo" height={350} width={350}></Image>
        </div>
        <div className="mx-20 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">FUNCTIONAL TESTING</h1>
            <p>Functional testing is a critical component in improving the quality of generated software. Consumers constantly-changing expectations and needs, the hazards of introducing a new product without rigorous quality assurance are larger now than ever before.</p>
        </div>
        <div className="mx-20 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">AUTOMATION TESTING</h1>
            <p>Test automation remains a thriving term amongst QA teams in an effort to achieve faster time to market, expand test coverage, and improve test team efficiency. Automation testing necessitates dedicated work and a controlled setting. Lack of trained test automation engineers, test maintenance efforts, particularly in an agile product life cycle, ballooning test environment expenses, complex test data, and insufficient end-to-end test coverage are some of the primary obstacles that a test automation endeavour frequently encounters.Some frameworks we have expertise in are Selenium, Cucumber, Cypress, Puppeteer, Protractor,Ranorex, TestCafe.
</p>
        </div>
        <div className="mx-20 my-10 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">MOBILE TESTING</h1>
            <p>To compete effectively in a changing global market, product firms release their apps on numerous platforms and devices, including iOS, Android, Windows, Mac, open source operating systems, and several mobile computing devices such as phones and e-readers. As a testing organisation, we have carved out a niche in mobile testing services, specifically testing applications on Android and iOS devices. Frameworks such as Appium and BrowserStack are something we are highly skilled in.</p>
        </div>
        <div className="mx-20 my-10 leading-8 text-justify pr-80">
        <h1 className="font-semibold text-4xl my-5">PERFORMANCE TESTING</h1>
        <p>One of the most difficult difficulties enterprises face today is obtaining and sustaining peak performance and scalability levels for their mission essential applications. They are vulnerable to the types of catastrophic slowdowns and breakdowns that cripple production, drive away customers, and demolish the company's bottom line if they do not have an effective approach for anticipating system behaviour and performance under real-world stress conditions. JMeter and POSTMAN are some of the frameworks we have expertise in.</p>
        </div>
        <div className="mx-20 my-10 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">ACCESSIBILITY TESTING</h1>
            <p>As important as cognitive accessibility is, Panorama focuses on providing the correct combination of manual and automated test approaches, with end user inclusivity as the key. We have a strong interest in automated accessibility, and with the combined expertise of our automation and accessibility teams, we have been able to leverage the latest in the industry, such as image recognition, natural language processing, and machine learning APIs, to bring AI powered automation to this space.</p>
        </div>
        <div className="mx-20 my-10 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">USABILITY TESTING</h1>
            <p>Usability is a critical factor in determining a product&rsquo;s market adoption. Along with the web, a successful mobile user experience is more crucial than ever, and Panorama has developed a mobile usability testing methodology based on our experience with a diverse range of clients. We have also teamed with domain experts in specific scenarios to test for usability in depth in order to deliver a full range of software testing services.</p>
        </div>
        <div className="mx-20 my-10 leading-8 text-justify pr-80">
            <h1 className="font-semibold text-4xl my-5">SECURITY TESTING</h1>
            <p>In today&rsquo;s environment of rapid digital change, cyber security has emerged as a critical business factor in a product&rsquo;s consumer acceptance and operational legitimacy. The scale and scope of security engineering are expanding by the day, necessitating engineering teams to adapt to novel tactics for mitigating threats and working with a combination of tools and automated solutions to look beyond standard web application security issues.</p>
        </div>
    </body>
    </>
    
  )
}
