import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <>
       <header className="h-96 w-100 px-20 bg-blue py-20 text-center" style={{
        
        backgroundImage:`url('./img.jpg')`,
        height:"900", backgroundColor:"blue" }}>
    
    <div className="bg-blur">
        
        
        <div 
        className="pt-16 ">
            <h1 className="text-white text-6xl  font-bold ">About us</h1>
        </div>

        <div className="pt-4">
            <h4 className=" text-white font-semibold text-1xl ">FORMER ENGINEERS TURNED BUSINESSMEN</h4>
        </div>
        </div>
    </header>
    <div  className="">
        {/* <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ... opacity-20"> */}
        <div className="text-black text-3xl pt-10 pb-5px text-center font-bold ">WHY &lsquo;PANORAMA&rsquo;?
        

        <div className="flex-wrap  flex-center  w-20 h-px bg-gray-400"></div> 
        
        </div>
           {/* </div> */}
    < p className="font-mono pt-5 pb-2 ml-4 mr-4  font-medium  text-gray-600 text-2xl  text-center space-y-6">
        The meaning of the word panorama is &lsquo;an unbroken view of the whole region surrounding an observer&rsquo;. It all began in 
        2018, in a small room, when two best friends decided to quit their jobs and start their own venture. Initially 
        all we could see was our life and the new avenues we could explore swirling around us, thus choosing the name
         “Panorama”.
    </p>
    <p className="font-mono pt-5 ml-4 mr-4  font-medium  text-gray-600 text-2xl text-center space-y-6">
    We have all heard stories about great businesses beginning from one small room and a couple of enthusiastic dreamers. Today 
    our company is filled with over 40 hardworking and skilled dreamers. We take pride in sharing all the same values such as: 
    beneficence, non-maleficence, autonomy, justice, truth-telling and promise-keeping. All of us at Panorama are a team, sharing 
    the same ethics and having each other&rsquo;s back.
    </p>

    </div>
    </>
  );
}
