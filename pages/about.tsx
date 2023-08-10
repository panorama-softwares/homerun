import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <>
      <header className="h-60 w-100 bg-purple px-20 py-10 text-center">
        <div className="flex  justify-center flex-col">
          <h1 className="text-5xl font-bold">ABOUT US</h1>
          <Image
            className="self-center"
            src="https://global-uploads.webflow.com/6239a0570dee59564e28c3ec/625540dfd3ca4a06db9b4d75_path2987.png"
            alt="line"
            width="160"
            height="70"
          ></Image>
          <div>
            <h4 className="font-bold p-7">FORMER ENGINEERS TURNED BUSINESS</h4>
          </div>
        </div>
      </header>
      <div className="py-7 px-7">
        <h2 className="font-bold text-2xl text-center">WHY PANORAMA</h2>
        <p className="py-5 text-xl">
          &ldquo;The meaning of the word panorama is &lsquo;an unbroken view of
          the whole region surrounding an observer&rsquo;. It all began in 2018,
          in a small room, when two best friends decided to quit their jobs and
          start their own venture. Initially all we could see was our life and
          the new avenues we could explore swirling around us, thus choosing the
          name Panorama.&rdquo;
        </p>
        <p className="text-xl">
          We have all heard stories about great businesses beginning from one
          small room and a couple of enthusiastic dreamers. Today our company is
          filled with over 40 hardworking and skilled dreamers. We take pride in
          sharing all the same values such as: beneficence, non-maleficence,
          autonomy, justice, truth-telling and promise-keeping. All of us at
          Panorama are a team, sharing the same ethics and having each
          other&apos;s back.
        </p>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
