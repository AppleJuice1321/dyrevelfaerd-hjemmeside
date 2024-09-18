"use client";

import useGet from "@/hook/use-get";

export function Volunteer() {
  const { data } = useGet("http://localhost:4000/api/v1/volunteers", {
    method: "GET",
  });

  // console.log(data);

  return (
    <div className="py-8 px-80 bg-blue-100">
      <h1 className="title-section text-2xl py-4">Bliv Frivillig</h1>
      <section className="flex justify-between gap-10">
        {data &&
          data.map((about) => {
            return (
              <li key={about.id} className="w-4/12 h-[50em] border border-gray-300 bg-gray-200">
                <h1 className="border border-gray-300 p-4">{about.title}</h1>
                <img src={about.asset.url} alt="Billede af frivillige" className="p-4 rounded-2xl"/>
                <p className="p-4">{about.content}</p>
              </li>
            );
          })}
      </section>
    </div>
  );
}
