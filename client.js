const net = require('net');

const connect = () => {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game server!')
    conn.write('Name: CSA');

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
})}

 module.exports = { connect };