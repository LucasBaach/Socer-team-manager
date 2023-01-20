const express = require('express');

const app = express();
app.use(express.json());

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

app.get('/teams/:id', (req, res) => {
    const { id } = req.params;
    const teamID = teams.find((team) => team.id === Number(id));

    if (!teamID) {
        res.status(404).json({ message: 'Team not found' });
    }

    return res.status(200).json({ teamID });
});

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;

    const updateTeam = teams.find((team) => team.id === Number(id));

    if (!updateTeam) {
        res.status(404).json({ message: 'Team not found' });
    }

    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
});

module.exports = app;