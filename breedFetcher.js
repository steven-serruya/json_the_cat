const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=sib";


request(url, (error, response, body) => {
  if (error) {
    console.log("error", error);
    return;
  }

  const data = JSON.parse(body);

  // Checking the type of data
  console.log("Type of data:", typeof data);
  if (data.length > 0) {
    const breed = data[0];
    console.log(breed.description);
  } else {
    console.log("Breed not found");
  }
});
