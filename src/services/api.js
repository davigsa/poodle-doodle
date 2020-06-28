import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-functions-bbfa2.cloudfunctions.net/api/",
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default api;
