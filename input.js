const { stdin } = require("process");

let connection; // Stores the active TCP connection object.

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // ctrl+c which exits
    process.exit();
  } else if (key === 'w') { // Move: up
    connection.write("Move: up");
    console.log("Move: up");
  } else if (key === 'a') { // Move: left
    connection.write("Move: left");
    console.log("Move: left");
  } else if (key === 's') { // Move: down
    connection.write("Move: down");
    console.log("Move: down");
  } else if (key === 'd') { // Move: right
    connection.write("Move: right");
    console.log("Move: right");
  } else if (key === 'q') {
    connection.write("Say: YUM");
    console.log("YUM");
  } else if (key === 'e') {
    connection.write("Say: NOM");
    console.log("NOM");
  } else if (key === 'c') {
    connection.write("Say: BURP");
    console.log("BURP");
  }
  return handleUserInput;
};

module.exports = setupInput;