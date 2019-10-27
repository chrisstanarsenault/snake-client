/**
 *  Setup User Interface
 *  Specifically, so that we can handle user input via stdin
 */
const net = require('net');
let connection;

const handleUserInput = (key, connect) => {
  if (key === '\u0003') {
    process.exit()
  } else if (key === '\u0077') {
    connect.write('Move: up');
  } else if (key === '\u0061') {
    connect.write('Move: left');
  } else if (key === '\u0073') {
    connect.write('Move: down');
  } else if (key === '\u0064') {
    connect.write('Move: right');
  }
}

const setupInput = (conn) => {
  connection = {conn};

  const connect = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  console.log(connection)

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume()
  stdin.on('data', (key) => {
      handleUserInput(key, connect)
    })

  return stdin;
}

module.exports = { setupInput }