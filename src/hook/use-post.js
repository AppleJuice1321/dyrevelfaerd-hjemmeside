// "use client"

// import axios from "axios"
// import { useEffect, useState } from "react"

// function usePost(url) {
//     // States
//     const [dataPOST, setDataPOST] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [errorMessage, setErrorMessage] = useState(null)

//     // Fetch - GET
//     const getData = async (url) => {
//         try {
//             const response = await axios(url, {
//               method: "POST",
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                   "username": "admin",
//                   "password": "1234"
//                 }),
//               })
//             setDataPOST(response.dataPOST)
//         } catch {
//         } finally {
//             setLoading(false)
//         }
//     }

//     // handle sideeffects
//     useEffect(() => {
//         getData()
//     },[url])

//     return { dataPOST, loading, errorMessage}
// }

// export default usePost