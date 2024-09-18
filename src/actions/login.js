"use server"

import axios from "axios"
import { cookies } from "next/headers"
import { toast } from "react-toastify"

export default async function Login(formData) {

    // Store formData
    const form = {
        username: formData.get("text"),
        password: formData.get("password")
    }

    // fetch Post login to get accesstoken
    try {
        const response = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        // return data from fetch post and store accessToken & userID inside cookie
        if(response.status === 200) {

            const data = await response.json()
            // Stores accestoken in cookie
            cookies().set("lh_at", data.accessToken, {maxAge: 60 * 60})
            // Stores userID in cookie
            cookies().set("lh_uid", data.id, {maxAge: 60 * 60})
            // notify user - success
        } else {
            // console.log(err)
        }
    } catch(err) {
    }
}