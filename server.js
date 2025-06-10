const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy user data
let users = [
  { id: 1, username: 'john_doe', email: 'john@example.com', password: 'password123' },
  { id: 2, username: 'jane_doe', email: 'jane@example.com', password: 'password456' }
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Route for user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username or email is already taken
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  // Generate a unique ID for the new user
  const id = users.length + 1;

  // Create a new user
  const newUser = { id, username, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
