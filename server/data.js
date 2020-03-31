const fetch = require('node-fetch');
const geoCoder = require('./geocoder');

API_URL = process.env.CASES_API_URL;

async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function preparedJson() {
  try {
    const raw = await fetchData(API_URL);
    let keys = Object.keys(raw);
    let array = [];
    for (let i = 1; i < 2; i++) {
      const key = keys[i];
      //const geoCode = await geoCoder(key);
      const lastItem = raw[key].pop();
      lastItem.name = key;
      //lastItem.geo = geoCode
      array.push(lastItem);
    }
    return array;
  } catch (error) {
    console.error(error);
  }
}



/* async function prepareJson() {
  let raw = await fetchData(API_URL);
  let keys = Object.keys(raw);
  let array = [];
  keys.map(async key => {
    const geoCode = await geoCoder(key)
    const lastItem = raw[key].pop();
    lastItem.name = key;
    lastItem.geo = geoCode;
    array.push(lastItem);
  })
  return array;

} */

module.exports = {
  preparedJson
};
