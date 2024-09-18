"use client";

import About from "@/components/about";
import { Animals } from "@/components/animals";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Navigation from "@/components/navigation";
import Newsletter from "@/components/newsletter";
import { Volunteer } from "@/components/volunteer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const getData = async () => {
  //   try {
  //     // Fetch call
  //     const response = await axios.get(
  //       "http://localhost:4000/api/v1/users/1", {
  //         method: "GET"
  //       }
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     // Error message
  //     // console.log(error.response.data);
  //   } finally {
  //     // Loading state
  //     setLoading(false);
  //   }
  // };
  // // console.log(data)

  // useEffect(() => {
  //   getData(data);
  // }, []);

  return (
    <>
      <header>
        <div className="mx-[20em]">
          <Navigation />
        </div>
        <Hero/>
        <div className="mx-[20em]">
          <About />
        </div>
      </header>

      <main>
        <Volunteer />
        <Hero3 />
        <Newsletter />
        <Hero2 />
        <div className="mx-[20em]">
          <Animals />
        </div>
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
