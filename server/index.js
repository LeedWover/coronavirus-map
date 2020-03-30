const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const {prepareJson} = require('./data')

app.get('/api', async (req, res) => {
  const data = await prepareJson();
  res.json(data)
})

app.listen(port, () => console.log(`Server listening on port: ${port}!`))