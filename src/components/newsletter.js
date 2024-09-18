"use client";

import useGet from "@/hook/use-get";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Newsletter() {
  // Post input of user
  // async function handleNewsletterSubmit(event) {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:4000/api/v1/subscribers", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: event.target.name.value,
  //         email: event.target.email.value,
  //       }),
  //     });
  //   } catch {
  //   } finally {
  //   }
  // }

  // const { data } = useGet("http://localhost:4000/api/v1/subscribers")

  // console.log(data)

  // async function handleNewsletterSubmit(event) {
  //   fetch("http://localhost:4000/api/v1/subscribers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Brian",
  //       email: "be@rts.dk",
  //     }),
  //   })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }

  // onSubmit={handleNewsletterSubmit}

  return (
    <section className="flex flex-col px-[20em] bg-blue-100 h-60 flex p-4">
      <h1 className="title-section text-2xl pb-7">Tilmed vores nyhedsbrev</h1>

      <div className="flex justify-between h-full flex-wrap">
        <div>
          <p>
            Få inspiration og nyheder om dyrevelfærd og arbejde, direkte i din
            indbakke.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex gap-10">
            {/* Name */}
            <input type="text" name="name" placeholder="Navn" className="p-1 w-[15em]"/>

            {/* EMAIL */}
            <input type="email" name="email" placeholder="Email" className="p-1 w-[15em]"/>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end">
            <button type="submit">Tilmeld</button>
          </div>
        </form>
      </div>
    </section>
  );
}
