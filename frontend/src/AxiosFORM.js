import axios from "axios";

const axiosFORMInst = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/www-form-urlencoded",
    "accept": "application/www-form-urlencoded",
  },
});


export default axiosFORMInst;