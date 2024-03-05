import axios from "axios";

let tmdbClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + import.meta.env.VITE_TMDB_TOKEN
  }
});

export default tmdbClient;