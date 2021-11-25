const express = require('express')
const { createReadStream } = require('fs') 
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(80)

app.get('/', (req, res) => {
	createReadStream('index.html').pipe(res)
})

// "/api/date"
app.get('/api/date', (req, res) => {
  var time = Date.now()
  var time_json={
    "date": time
  }
  var time_str=JSON.stringify(time_json)
  res.send(time_str)
})
  
// "/api/datecors"
app.get('/api/datecors', (req, res) => {
  var time = Date.now()
  var time_json={
    "date": time
  }
  var time_str=JSON.stringify(time_json)
  // CORS 
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  res.setHeader("Access-Control-Allow-Method", "*")
  res.send(time_str)
})

// "/api/jsonpdate"
app.get('/api/jsonpdate', (req, res) => {
  var time = Date.now()
  let { callback = Function.prototype } = req.query
  var time_json={
    "date": time
  }
  res.send(`${callback}(${JSON.stringify(time_json)})`)
})

// Leepech2021
