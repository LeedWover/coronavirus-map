const fetch = require('node-fetch');
const geoCoder = require('./geocoder');

API_URL = process.env.CASES_API_URL;

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

async function prepareJson() {
  let raw = await fetchData(API_URL);
  let keys = Object.keys(raw);
  let array = [];
  keys.map(key => {
    const lastItem = raw[key].pop();
    lastItem.name = key;
    array.push(lastItem);
  })
  return array;

}

module.exports = {
  prepareJson
}