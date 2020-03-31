const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()

var mongoose = require('mongoose');
const db = require('./db/connect')
const {updateData, loadData} = require('./db/controller')

const {preparedJson} = require('./data');

/* (async function setData() {
  setInterval(async function(){
    const data = await prepareJson();
    console.log(data)
  }, 1000);
})() */

app.get('/api', async (req, res) => {
  /* const data = await prepareJson();
  res.json(data) */
  const data = await updateData()
  res.send(data)
})

app.get('/api/load', async (req, res) => {
  /* const data = await prepareJson();
  res.json(data) */
  const data = await loadData()
  res.send(data)
})

app.listen(port, () => console.log(`Server listening on port: ${port}!`))