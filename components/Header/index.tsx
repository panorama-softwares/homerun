import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-blue shadow sticky top=10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-5">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Image
                src="https://panoramasoftwares.com/assets/images/logoFile/panorama-light-logo.png"
                width="190"
                height="180"
                alt="Panorama Logo"
                
              ></Image>
              <span className="font:semi-bold font-sans text-white">
                taking you Forward...
              </span>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : ""
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-sans">
                <li className="text-white hover:text-violet-500 font-semibold cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                
                <div className="group relative cursor-pointer py-2 ">
                  <button data-dropdown-toggle="dropdown" className="flex items-center justify-between space-x-1  px-4 text-white" data-dropdown-trigger="{hover|click}" type="button">
                    <Link
                      href="/services"
                      className="menu-hover my-2 text-base font-medium text-black lg:mx-1"
                      onClick=""
                    >
                      Services
                    </Link>
                  </button>
                  <div
                    class="invisible absolute z-50 flex w-max h-50 flex-col bg-white rounded py-3 px-3 gap-x-4 text-gray-800 shadow-xl group-hover:visible"
                    onClick=""
                  >
                    <Link
                      href="/website"
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Website Development
                    </Link>

                    <Link
                      href=""
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Mobile Application Development
                    </Link>
                    <Link
                      href="/quality"
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Quality Assurance
                    </Link>
                    <Link
                      href=""
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Desktop App Development
                    </Link>
                    <Link
                      href="/search"
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Search Engine Optimization
                    </Link>
                    <Link
                      href=""
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Business Branding
                    </Link>
                    <Link
                      href="/graphic"
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Graphic Designing
                    </Link>
                    <Link
                      href=""
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Custom Web Solution
                    </Link>
                    <Link
                      href="/social"
                      className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 px-1"
                    >
                      Social Media Marketing
                    </Link>
                  </div>
                </div>

                <li className="text-white hover:text-violet-500 font-semibold cursor-pointer">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="text-white hover:text-violet-500 font-semibold cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-white hover:text-violet-500 font-semibold cursor-pointer">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
