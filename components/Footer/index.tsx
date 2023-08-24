
import Image from "next/image";

import { ReactElement } from 'react';



export default function Footer() {
  
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray mt-8">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left lg:w-1/4 md:w-1/2 w-full px-4 space-x-6">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src="https://panoramasoftwares.com/assets/images/logoFile/panorama-light-logo.png" alt="logo" height="200" width="200"></Image>
            </a>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />

            <p className="mt-2 !ml-0 text-sm text-light">In panorama software solutions, our goal is innovation, with the aim of leaving

 
              a mark worth following and imitating. Our endeavour began in 2018, when the founders of this venture Akshay
              Garg and Lokesh Singla, had a vision of promoting innovation. Today, we are a team of 60+ highly skilled
              employees who deliver exceptional work and make dreams come true.</p>
          </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-x-6">
              <h2 className="title-font font-medium text-white tracking-widest text-sm  pb-2 ml-5 text-left space-x-6">SERVICES</h2>
              <nav className="list-none ml-0 ">
                <li className="pb-2">

                  <a className="text-light hover:text ">Website Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text ">Mobile Application Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text ">Desktop App Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800  text-center">Search Engine Optimization</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Business Branding</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Graphics Designing</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Custom Web Solution</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Social Media Marketing</a>

                  <a className="text-white hover:text ">Website Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text ">Mobile Application Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text ">Desktop App Development</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800  text-center">Search Engine Optimization</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Business Branding</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Graphics Designing</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Custom Web Solution</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Social Media Marketing</a>

                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-x-6">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 space-x-10 text-left ml-6">USEFUL LINKS</h2>
              <nav className="list-none mb-10 ">
                <li className="pb-2">

                  <a className="text-light hover:text-gray-800 ">Home</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">About</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Contact</a>
                </li>
                <li className="pb-2">
                  <a className="text-light hover:text-gray-800 ">Technology</a>

                  <a className="text-white hover:text-gray-800 ">Home</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">About</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Contact</a>
                </li>
                <li className="pb-2">
                  <a className="text-white hover:text-gray-800 ">Technology</a>

                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 space-x-2">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
              <nav className="list-none mb-10">
                <li className="pb-6">

                  <a className="text-white ">
                    <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;

                    +91-98888-87651
                  </a>
                </li>
                <li className="pb-6 flex text-white items-center">

                  <i className="fa fa-envelope fa-lg align-item" aria-hidden="true"  ></i>&nbsp;
                  <a className="">hr@panoramasoftware.in</a>
                </li>
                <li className="pb-6">
                  <a className="text-white ">

                    <i className="fa-solid fa-location-dot"></i>&nbsp;
                    1017-1018,Tower 1,Assotech Business Cresterra,
                  </a>
                  <a className="text-white ">Sector 135, Noida, India</a>

                </li>
                <li >

                </li>
              </nav>
            </div>

          {/* </div> */}
        </div>
        <hr className="text-white"></hr>
        <div className="bg-gray">
          <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-light text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-light">

        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">

                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              <a className="ml-3 text-light">

              <a className="ml-3 text-gray-500">

                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a className="ml-3 text-light">

              <a className="ml-3 text-gray-500">

                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>

              <a className="ml-3 text-light">

              <a className="ml-3 text-gray-500">

                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>


  );
}

