import axios from "axios";
// axios instance
const EMS_CLIENT = axios.create({
  baseURL: "http://localhost:8081/api/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    token: localStorage.getItem("token"),
  },
});

export default EMS_CLIENT;
