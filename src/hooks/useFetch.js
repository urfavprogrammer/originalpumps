// import { useEffect, useState } from "react";
// // import axios from "axios";

// function useFetch() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState("");
//     const url = "http://localhost:8000/products";

//     useEffect(() => {
//         const fetchData = async() => {
//             try{
//                 const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(response.statusText)
//         }
//         const result = await response.json();
//         setData(result);
//         setError("");
//     } catch (error){
//         console.log(error.message)
//     }
// }
//     },
// [url]);
// return{data, error}
// }

// export default useFetch