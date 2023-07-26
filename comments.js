//create web server
const express = require('express');
const readline = require('readline-sync');
const path = require('path');

const app = express();

// Function to get the desired port number from the user
function getPortFromUser() {
  const defaultPort = 8000; // Default port if no input is provided
  const portInput = readline.question(`Enter the port number (default: ${defaultPort}): `);

  const port = parseInt(portInput, 10);

  if (isNaN(port) || port <= 0 || port > 65535) {
    console.log('Invalid port number. Using the default port.');
    return defaultPort;
  }

  return port;
}

const port = getPortFromUser();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
