// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'Nainesh', email: 'nainesh@example.com' },
  { id: 2, name: 'Sneha', email: 'sneha@example.com' }
];

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Web Service API!');
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Add a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
