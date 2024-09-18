"use client";

import useGet from "@/hook/use-get";

export default function About() {
  const { data } = useGet("http://localhost:4000/api/v1/abouts", {
    method: "GET",
  });

//   console.log(data);

  return (
      // Fetched about heading & text
      <section className="flex justify-between gap-10 py-8">
        {data &&
          data.map((about) => {
            return (
              <li key={about.id} className="w-4/12">
                <h1 className="title-section text-2xl">{about.title}</h1>
                <p>{about.content}</p>
              </li>
            );
          })}
      </section>
  );
}

//   // States
//   const [about, setAbout] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // fetch GET
//   async function getAbout() {
//     const response = await fetch("http://localhost:4000/api/v1/abouts", {
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
//   }

//   // handle sideeffect
//   useEffect(() => {
//     getAbout();
//   }, []);

//   fetch("http://localhost:4000/api/v1/abouts", {
//     "method": "GET"
//   })
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getData = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/v1/abouts", {
//         method: "GET",
//       });
//       setData(response.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   console.log(data);

//   useEffect(() => {
//     getData();
//   }, []);
