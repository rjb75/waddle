import axios from "axios";

const axiosJSONInst = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  },
});


export default axiosJSONInst;