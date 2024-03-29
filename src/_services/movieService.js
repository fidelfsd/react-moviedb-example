import axios from "axios";

import { global } from "../_config/global";

const movieService = {};

movieService.getPopular = async (page = 1) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/movie/popular`,
      params: { language: "en-US", page: page },
      headers: {
         accept: "application/json",
         Authorization: `Bearer ${global.TOKEN}`,
      },
   };
   await sleep(2000); // TODO
   const response = await axios.request(options);
   return response.data;
};

movieService.getNowPlaying = async (page = 1) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/movie/now_playing`,
      params: { language: "en-US", page: page },
      headers: {
         accept: "application/json",
         Authorization: `Bearer ${global.TOKEN}`,
      },
   };
   await sleep(2000); // TODO
   const response = await axios.request(options);
   return response.data;
};

movieService.getById = async (id) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/movie/${id}`,
      params: { language: "en-US" },
      headers: {
         accept: "application/json",
         Authorization: `Bearer ${global.TOKEN}`,
      },
   };
   await sleep(2000); // TODO
   const response = await axios.request(options);
   return response.data;
};

movieService.search = async (params) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/search/movie`,
      params,
      // params: {
      //    query: "Spider",
      //    include_adult: "false",
      //    language: "en-US",
      //    page: "1",
      // },
      headers: { accept: "application/json" },
   };

   await sleep(2000); // TODO
   const response = await axios.request(options);
   return response.data;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, 0));
// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default movieService;
