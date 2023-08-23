import Link from "next/link";
import Image from "next/image";
import blg1 from "./blg1.jpg"
import blg2 from "./blg2.jpg"
import blg3 from "./blg3.jpg"
import blg4 from "./blg4.jpg"
import blg5 from "./blg5.jpg"
import blg6 from "./blg6.jpg"

export default function blog() {
  return (
    <>
      
     <body>
      <div className="min-w-fit h-max bg-white flex flex-wrap px-10 justify-evenly py-10 my-10 mx-10">
        <div className="conatiner basis-1/3 my-3">
         <Image priority src={blg1} alt="logo" height={300} width={300}></Image>
         <div className="py-3 font-semibold text-left">IMPORTANCE OF A QA ANALYST</div>
         <button className="bg-green border text-white rounded mx-28 h-10 w-38 px-2"><Link href="/qa">Click here</Link></button>
        </div>
        <div className="basis-1/3  my-3">
        <Image priority src={blg2} alt="logo" height={300} width={300}></Image>
        <div className="pt-2 font-semibold text-left">5 WEB DEVELOPMENT FRAMEWORKS TO<br></br> USE IN 2021</div>
        <button className="bg-green border text-white rounded mx-28 h-10 w-38 px-2"><Link href="/frame">Click here</Link></button>
        </div>
        <div className="basis-1/3  my-3">
        <Image priority src={blg3} alt="logo" height={300} width={300}></Image>
        <div className="py-3 font-semibold text-left">NATIVE VS HYBRID APPLICATIONS</div>
        <button className="bg-green border text-white rounded mx-28 h-10 w-38 px-2"><Link href="/native">Click here</Link></button>
        </div>
        <div className="basis-1/3  my-5">
        <Image priority src={blg4} alt="logo" height={300} width={300}></Image>
        <div className="py-3 font-semibold text-left">WHY IS OUTSOURCING QA BENEFICIAL?</div>
        <button className="bg-green border text-white rounded mx-28 h-10 w-38 px-2"><Link href="/outsource">Click here</Link></button>
        </div>
        <div className="basis-1/3  my-5">
        <Image priority src={blg5} alt="logo" height={300} width={300}></Image>
        <div className="py-3 font-semibold text-left">WHY IS SOFTWARE TESTING IMPORTANT?</div>
        <button className="bg-green border text-white rounded mx-28 h-10 w-38 px-2"><Link href="/testing">Click here</Link></button>
        </div>
        <div className="basis-1/3  my-5">
        <Image priority src={blg6} alt="logo" height={300} width={300}></Image>
        <div className="py-3 font-semibold text-left">WHAT ARE THE GOALS OF SOFTWARE TESTING?</div>
        <button className="bg-green border mx-28 text-white rounded  h-10 w-38 px-2">Click here</button>
        </div>
      </div>
     </body>
    </>
  );
}
