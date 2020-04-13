const countries = require('./model');

const {preparedJson} = require('../data');

const dummyData = [
  {
    date: "2020-3-30",
    confirmed: 30,
    deaths: 0,
    recovered: 0,
    name: "Bhutan",
    geo: {
        lat: 27.549511,
        lng: 90.5119273
    }
  },
  {
    date: "2020-3-30",
    confirmed: 5,
    deaths: 0,
    recovered: 0,
    name: "Hungary",
    geo: {
        lat: 27.549511,
        lng: 90.5119273
    }
  },
]

async function removeData() {
  const dataArray = await countries.find({});
  if(dataArray.length) {
    dataArray.map(async food => {
      await food.remove({}).catch(err =>console.log(err))
    })
  }
  return
}

async function updateData() {
  removeData().then(async() => {
    const casesArray = await preparedJson();
    casesArray.map(async obj => {
      const newData = await new countries(obj);
      console.log(newData)
      newData.save().catch(err =>console.log(err))
    })
  })
}

async function loadData() {
  const dataArray = await countries.find({});
  return dataArray;
}

module.exports = {
  updateData,
  loadData
}