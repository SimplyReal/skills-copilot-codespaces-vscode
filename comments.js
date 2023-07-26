//create web server
const express = require('express');
const readline = require('readline-sync');

const app = express();

// Function to get the desired host IP address from the user
function getHostFromUser() {
  const defaultHost = 'localhost'; // Default host if no input is provided
  const hostInput = readline.question(`Enter the host IP address (default: ${defaultHost}): `);

  if (hostInput.trim() === '') {
    console.log('Using the default host IP address.');
    return defaultHost;
  }

  return hostInput;
}

// Function to get the desired port number from the user
function getPortFromUser() {
  const defaultPort = 8000; // Default port if no input is provided
  const portInput = readline.questionInt(`Enter the port number (default: ${defaultPort}): `);

  if (!portInput) {
    console.log('Using the default port number.');
    return defaultPort;
  }

  return portInput;
}

const host = getHostFromUser();
const port = getPortFromUser();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}/`);
});

