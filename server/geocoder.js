const fetch = require('node-fetch');

const API_KEY = process.env.GEOCODE_API_KEY;

async function geoCoding(country) {
  const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${country}`);
  const data = await res.json();
  return data.results[0].geometry;
}

module.exports = geoCoding;