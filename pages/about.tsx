import Link from "next/link";

export default function about() {
  return (
    <>
      <h1>About Page!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div className="py-7 px-7">
        <h2 className="font-semibold text-xl">Why Panorama</h2>
        <p>
          &ldquo;The meaning of the word panorama is &lsquo;an unbroken view of
          the whole region surrounding an observer&rsquo;. It all began in 2018,
          in a small room, when two best friends decided to quit their jobs and
          start their own venture. Initially all we could see was our life and
          the new avenues we could explore swirling around us, thus choosing the
          name Panorama.&rdquo;
        </p>
        <p>
          We have all heard stories about great businesses beginning from one
          small room and a couple of enthusiastic dreamers. Today our company is
          filled with over 40 hardworking and skilled dreamers. We take pride in
          sharing all the same values such as: beneficence, non-maleficence,
          autonomy, justice, truth-telling and promise-keeping. All of us at
          Panorama are a team, sharing the same ethics and having each
          other&apos;s back.
        </p>
      </div>
    </>
  );
}
