//create a petition to https://api.gbif.org/v1/species?limit=20&offset=0 using axios

const axios = require("axios");

const getAllSpecies = async (num) => {
  const URL_DYNAMIC = `https://api.gbif.org/v1/species?limit=${num}&offset=0`;

  await axios
    .get(URL_DYNAMIC)
    .then((response) => {
      console.log(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

//getAllSpecies(20);
let response_distributions = [];

// CREATE another using this url https://api.gbif.org/v1/species/5231190/distributions
const getDistributions = async (id) => {
  const URL_DYNAMIC = `https://api.gbif.org/v1/species/${id}/distributions`;

  await axios
    .get(URL_DYNAMIC)
    .then((response) => {
      console.log(response.data.results);
      response_distributions = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};

getDistributions(5231190);
