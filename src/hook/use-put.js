// "use client"
// import axios from "axios"
// import { useEffect, useState } from "react"

// function usePut(url) {
//     // States
//     const [dataPUT, setDataPUT] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [errorMessage, setErrorMessage] = useState(null)

//     // Fetch - GET
//     const getData = async (url) => {
//         try {
//             const response = await axios(url)
//             setDataPUT(response.dataPUT)
//         } catch {

//         } finally {
//             setLoading(false)
//         }
//     }

//     // handle sideeffects
//     useEffect(() => {
//         getData()
//     },[url])

//     return { dataPUT, loading, errorMessage}
// }

// export default usePut