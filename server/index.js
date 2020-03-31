const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config()

var mongoose = require('mongoose');
const db = require('./db/connect')
const {updateData, loadData} = require('./db/controller')

app.use(cors())

/* (async function setData() {
  setInterval(async function(){
    const data = await prepareJson();
    console.log(data)
  }, 1000);
})() */

app.get('/api/update', async (req, res) => {
  const data = await updateData()
  res.send('Updated')
})

app.get('/api/cases', async (req, res) => {
  /* const data = await prepareJson();
  res.json(data) */
  const data = await loadData()
  res.send(data)
})

app.listen(port, () => console.log(`Server listening on port: ${port}!`))