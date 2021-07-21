const axios = require("axios");

async function getData() {
  const result = await axios.get("https://api.github.com/users/denoland");
  console.log(result.data);
}

getData();
