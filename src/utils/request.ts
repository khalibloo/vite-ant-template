import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URI as string,
  //   headers: { "Content-Type": "application/json" },
});
