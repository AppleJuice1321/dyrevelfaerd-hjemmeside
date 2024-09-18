"use client";

import Login from "@/actions/login";
import { useState } from "react";

export default function LoginDialog() {
  // Toggle state
  const [toggle, setToggle] = useState(false);

  // Handle toggle - function
  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <>
      {/* Login button / toggle onclick */}
      <button onClick={handleToggle} className="ml-10">
        Login
      </button>

      {toggle ? (
        <div className="flex justify-center items-center bg-blue-100 bg-opacity-50 fixed h-screen w-screen top-0 left-0 z-10">
          <div className="border border-black border-2 bg-gray-200 rounded-lg w-[30em] h-[20em]">
            <div className="flex justify-end p-4">
              <button onClick={handleToggle}>Close</button>
            </div>

            {/* LOGIN FORM */}
            <form action={Login} className="flex flex-col gap-4 px-20">
              {/* Email input */}
              <label className="flex flex-col">
                Brugernavn
                <input type="text" name="brugernavn" className="rounded-lg " />
              </label>

              {/* Password input */}
              <label className="flex flex-col">
                Adgangskode
                <input
                  type="password"
                  name="adgangskode"
                  className="rounded-lg "
                />
              </label>

              {/* Submit button */}
              <button type="submit" className="p-6">
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
