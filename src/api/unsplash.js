import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID u9cEB-0sCHMZBQHxWlyjyvTWKOgatBDYXABiJmlodsI"
  }
});
