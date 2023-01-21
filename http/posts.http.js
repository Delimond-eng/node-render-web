const axios = require("axios");

const postsHttp = {
  getPosts: async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response;
  },
};
module.exports = postsHttp;
