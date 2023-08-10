import Link from "next/link";

export default function contact() {
  return (
    <>
      <header className="h-60 w-100 bg-purple px-20 py-10 text-center">
        <div className="flex  justify-center flex-col">
          <h1 className="text-5xl font-bold">CONTACT US</h1>
          <div>
            <h4 className="font-bold p-7">
              Get in touch and we&rsquo;ll get back to you as soon as we can. We
              look forward to hearing from you!
            </h4>
          </div>
        </div>
      </header>
      <div className="h-60 w-100 px-20 py-10 flex space-x-40">
        <div>
          Address<br></br>
          1017-1018, Tower 1, Assotech<br></br>Business<br></br>Cresterra,
          Sector 135, Noida, India
        </div>
        <div>
          24x7 support over email,<br></br>
          phone, or chat<br></br>hr@panoramasoftware.in
        </div>
        <div>
          Phone<br></br>+91 98888-87651
        </div>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
