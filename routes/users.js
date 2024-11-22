const express = require('express');
const router = express.Router();

let users = [
  {
    id: 1,
    name: 'Kristin Ward',
    email: 'kristinw9@hotmail.com',
    age: 20,
    country: 'London',
  },
  {
    id: 2,
    name: 'Sergio Owens',
    email: 'sergio.owens@gmail.com',
    age: 29,
    country: 'Paris',
  },
  {
    id: 3,
    name: 'Clarence Steves',
    email: 'clarence.steeves@gmail.com',
    age: 32,
    country: 'Warsawa',
  },
  {
    id: 4,
    name: 'Candice Stone',
    email: 'candice119@outlook.com',
    age: 18,
    country: 'Moscow',
  },
  {
    id: 5,
    name: 'Marjorie Murphy',
    email: 'murphy.m2@gmail.com',
    age: 27,
    country: 'Argentina',
  },
];

router.get('/users', (req, res) => {
  res.render('users', { users });
});

router.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let targetUser = users.filter((item) => {
    return item.id === id;
  });

  res.render('user', { targetUser });
});

module.exports = router;
