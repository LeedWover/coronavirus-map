const fetch = require('node-fetch');

API_URL = 'https://pomber.github.io/covid19/timeseries.json';

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

async function prepareJson() {
  let raw = await fetchData(API_URL)
  let keys = Object.keys(raw)
  let array = [];
  keys.map(key => {
    const lastItem = raw[key].pop();
    lastItem.name = key;
    array.push(lastItem)
  })
  return array;
}
prepareJson()
module.exports = {
  prepareJson
}