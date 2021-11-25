const express = require('express')
const { createReadStream } = require('fs') 
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.listen(80)

app.get('/', (req, res) => {
	createReadStream('index.html').pipe(res)
})

// Leepech2021
