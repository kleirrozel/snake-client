const { stdin } = require("process");
const connect = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (key === '\u0003') { /// ctrl+c which exits
    process.exit();
  } else if (key === 'w') {
    
  } else if (key === 'a') {

  } else if (key === 's') {

  } else if (key === 'd') {

  return handleUserInput;
};

setupInput();
