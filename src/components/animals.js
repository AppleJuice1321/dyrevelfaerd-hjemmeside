"use client";

import useGet from "@/hook/use-get";

export function Animals() {
  const { data } = useGet("http://localhost:4000/api/v1/animals", {
    method: "GET",
  });

//   console.log(data);

  return (
    <div className="py-8">
      <h1 className="title-section text-4xl bold p-2">Dyr Hos os</h1>
      <span className="block p-4">{data && data.lastIndexOf(data.id)} Dyr</span>
      <section className="flex justify-between flex-wrap gap-5">
        {data &&
          data.map((animal) => {
            return (
              <li key={animal.id} className="flex border border-gray-300 w-[39em] rounded-lg">
                  <img
                    src={animal.asset.url}
                    alt="Picture of Cat"
                    className="object-cover h-80 w-52 rounded-lg block"
                  />
                <div className="flex flex-col p-4">
                  <h1 className="font-medium text-2xl py-4">{animal.name}</h1>
                  <p>{animal.description}</p>
                </div>
              </li>
            );
          })}
      </section>
    </div>
  );
}
