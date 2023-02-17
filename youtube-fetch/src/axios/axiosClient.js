// import axios from "axios";

// const KEY = "AIzaSyBen0ZSriyGUy5fDw-S1muNF8JIu8m3YJs"

// export default axios.create({
//     baseURL:'https://localhost:4000',
//     params:{
//         part:'snippet',
//         maxResults:15,
//         key:KEY

//     },
//     headers:{

//     },
//     withCredentials:true
// })

import axios from 'axios';

export const  axiosClient = axios.create({
    baseURL:'http://localhost:4000', 
    withCredentials : true
})