/**
 *  Setup User Interface
 *  Specifically, so that we can handle user input via stdin
 */

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit()
  }
  // exit on control-c
}

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume()
  stdin.on('data', (key) => {
    handleUserInput(key)
  })

  return stdin;
}

module.exports = { setupInput }