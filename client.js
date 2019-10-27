const net = require('net');
const { IP, PORT } = require('./constants.js')

const connect = () => {

  const conn = net.createConnection({
    ip: IP,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game server!')
    conn.write('Name: CSA');

  // interpret incoming data as text
  conn.setEncoding('utf8');
  })
  return conn;
}

 module.exports = { connect };