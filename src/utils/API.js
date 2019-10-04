import axios from "axios";

export default axios.create({
  baseURL: "https://engine-staging.viame.ae/assessment/",
  responseType: "json"
});