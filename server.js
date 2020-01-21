const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/api/cars', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({message: 'error getting cars'})
    })
})

server.post('/api/cars', (req, res) => {
    db('cars').insert(req.body)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        res.status(500).json({message: 'error creating car'})
    })
})

module.exports = server;