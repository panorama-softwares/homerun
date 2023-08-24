import React from 'react'
import Image from 'next/image'
import imgt1 from './php.png'
import imgt2 from './htmljscss.png'
import imgt3 from './codeigniter.png'
import imgt4 from './laravel.png'
import imgt7 from './mysql.png'
import imgt5 from './ajax.jpg'
import imgt6 from './Android.jpg'
import imgt8 from './jquery.jpg'

export default function search() {
  return (
    <>
    <header className="h-60 w-100 bg-blue text-white px-20 py-10 text-center">
    <h1 className="font-bold text-5xl tracking-wide">TECHNOLOGY</h1>
    </header>
    <div className='flex pl-5 mx-3 my-3'>
    <Image src={imgt1} alt="logo" width={300} height={300}></Image>
     <Image src={imgt2} alt="logo" width={300} height={300}></Image>
     <Image src={imgt3} alt="logo" width={300} height={300}></Image>
     <Image src={imgt4} alt="logo" width={300} height={300}></Image>
     </div>
     <div className='flex pl-5 mx-3 my-3'>
    <Image src={imgt5} alt="logo" width={300} height={300}></Image>
     <Image src={imgt6} alt="logo" width={300} height={300}></Image>
     <Image src={imgt7} alt="logo" width={300} height={300}></Image>
     <Image src={imgt8} alt="logo" width={300} height={300}></Image>
     </div>


    </>
  )}