const express = require('express');

const app = express();

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
  ];

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

module.exports = app;