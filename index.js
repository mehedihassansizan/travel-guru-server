const express = require('express')
const app = express()
const port = 3000
const destinations = require('./data/travel_destination.json')
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('My Travel Guru Server is runnning')
})

app.get('/destinations', (req, res) => {
    res.send(destinations)
})

app.get('/destinations/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedDestination = destinations.find(d => parseInt(d.id) === id)
    res.send(selectedDestination)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})