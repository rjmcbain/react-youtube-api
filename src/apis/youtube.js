import axios from "axios";

const KEY = "AIzaSyBjvoZThV-Nnlh77RopOX8vBuaFx21VGIg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
