import Link from "next/link";

export default function services() {
  return (
    <>
      <h1>Careers Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className="py-7 px-7">
        <h2 className="font-semibold text-xl text-center">Our Services</h2>
        <p className="text-center my-9">
          LET&apos;S TEAM UP AND WORK TOWARDS SUCCESS
        </p>
        <h3>Website Development</h3>
        <p>
          First impressions are last impressions. Our websites truly portray who
          we are as a company. Let us help you in making your vision come true!
        </p>
      </div>
    </>
  );
}
