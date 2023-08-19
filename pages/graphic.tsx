import React from 'react'
import Image from 'next/image'
import grap from './graphic.jpg'

export default function graphic() {
  return (
    <>
       <header className="h-60 w-100 bg-blue text-white px-20 py-10 text-center">
    <h1 className="font-bold text-5xl tracking-wide">GRAPHICS DESIGNING</h1>
    </header>
    <body>
       <div className="flex h-max w-100 my-20 mx-24">
        <div className="leading-8">
           <p className="pr-5">Here at Panorama we add value to everything we do, from visuals, web strategy, user experience, to development and marketing. We create work that is inspired, effective, and intelligent for your brand. We are well-known for our exquisite designs and web-related Services.</p>
           <br></br>
           <p className="pr-5">Logo Design, Packaging Design, Brochure & Catalogue Design, and Print Advertisements are all part of our Graphic Designing service. Graphic design is the visual representation of an idea, message, or imagination. Logos, brochures, catalogues, and print advertisements, is what truly represents a company.</p>
            <br></br>
            <p className="pr-5">Graphic design is essential for product branding, from designing the company or organization&rsquo;s emblem, which gives it a distinct character, to preparing promotional material for the advertising of its products and services.</p>
        </div>
        <Image src={grap} alt='logo' height={350} width={350}></Image>
       </div>
       <div className="mx-10 leading-8 text-justify pr-80 pl-14">
        <h1 className="font-semibold text-4xl my-5">WEB DEVELOPMENT</h1>
        <p>The web is a global marketplace that has become more competitive for attention of potential clients. As a result, having a professionally built and visually appealing website is more crucial than ever.</p>
       </div>
       <div  className="mx-10 leading-8 text-justify pr-80 pl-14">
        <h1 className="font-semibold text-4xl my-5">PRINT DESIGNS</h1>
        <p>What are the primary design services offered by a Graphic Design Agency? Flyer and Leaflet.Designing, Poster Designing, Dangler Designing, Advertisement Designing, Exhibition Stall.Designing, Creative Designs for Facebook Marketing, and Magazine Advertisement.Designing are some of the services offered. At Panorama you&rsquo;ll get the best service at minimum price!</p>
       </div>
       <div  className="mx-10 leading-8 text-justify pr-80 pl-14 mb-10">
        <h1 className="font-semibold text-4xl my-5">LOGO DESIGNS</h1>
        <p>We consider a logo to be the face of your organization. It is the first thing that a potential customer will notice about your business; therefore, when designing a logo, we keep in mind that a logo should be designed in such a way that it can convey to potential customers that your business is professional, trustworthy, and provides quality goods or services.</p>
       </div>
    </body>
    </>
  )
}
