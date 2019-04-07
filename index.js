const express = require('express');
const app = express();

const PORT = 5555;
const USERS = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Williams'
  }
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/users', (req, res, next) => {
  res.json(USERS);
});

app.get('/users/:userId', (req, res, next) => {
  res.json(USERS.find(user => user.id === parseInt(req.params.userId)));
});

module.exports = {
  app
};
