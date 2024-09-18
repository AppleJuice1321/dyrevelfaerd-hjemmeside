"use client";

import useGet from "@/hook/use-get";

export default function Hero() {
  const { data } = useGet("http://localhost:4000/api/v1/assets", {
    method: "GET",
  });

  // console.log(data);

  const KITTEN_IMG = data[10] && data[10].url;

  return (
    <div className="relative hero-section">
      {/* Heading & subheading */}
        <img src={KITTEN_IMG} alt="Picture of kittens" className="bg-cover w-screen h-80 z-0" />

      <div className="flex flex-col gap-2 absolute top-20 px-80">
        <h1 className="text-6xl">Forening for Dyrevelfærd</h1>
        <span>Vi specialisere os i dyrevelfærd</span>
      </div>
    </div>
  );
}
