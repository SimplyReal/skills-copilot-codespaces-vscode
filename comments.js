//create web server
const express = require('express');
const app = express();

// Function to get the desired host IP address from the user
function getHostFromUser() {
  const defaultHost = 'localhost'; // Default host if no input is provided
  const hostInput = process.argv[2];

  if (hostInput) {
    return hostInput;
  }

  console.log('Using the default host IP address.');
  return defaultHost;
}

// Function to get the desired port number from the user
function getPortFromUser() {
  const defaultPort = 8000; // Default port if no input is provided
  const portInput = parseInt(process.argv[3], 10);

  if (!isNaN(portInput) && portInput > 0 && portInput <= 65535) {
    return portInput;
  }

  console.log('Using the default port number.');
  return defaultPort;
}

const host = getHostFromUser();
const port = getPortFromUser();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}/`);
});

