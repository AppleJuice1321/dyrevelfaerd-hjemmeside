"use client";

import useGet from "@/hook/use-get";

export default function Hero2() {
  const { data } = useGet("http://localhost:4000/api/v1/assets", {
    method: "GET",
  });

  // console.log(data);

  const DOG_IMG = data[0] && data[0].url;

  return (
    <div className="relative hero-section">
      {/* Heading & subheading */}
        <img src={DOG_IMG} alt="Picture of kittens" className="bg-cover w-screen h-80 z-10" />

      <div className="flex flex-col gap-2 absolute top-20 px-80">
        <h1 className="text-6xl">ADOPTER ET DYR</h1>
        <span>Overvejer du et nyt medlem til familien? Måske du er det perfekte match til et af vores mange svigtede internatdyr, som venter på nye kærlige hjem.</span>
      </div>
    </div>
  );
}
