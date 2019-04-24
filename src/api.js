import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "da52dc550590ca8027e94fe0c702ed74",
    language: "en-US"
  }
});

api.get("tv/popular");
