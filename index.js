const express = require('express')
const app = express()
// const port = 3000

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})