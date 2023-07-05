// Make a request to the API

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shoes-collections.p.rapidapi.com/shoes',
  headers: {
    'X-RapidAPI-Key': '7458705b19msh6dad1514cd29d33p10ebccjsnc5a163a0332a',
    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}