const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";
  request(url, (error, response, body) => {
    if (error) {
      callback(`Request error: ${error}`, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length > 0) {
      const breed = data[0];
      callback(null, breed.description);
    } else {
      callback("Breed not found", null);
    }
  });
};

module.exports = { fetchBreedDescription };
