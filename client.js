const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () { // establishes a connection
  const conn = net.createConnection({
    port: PORT,
    host: IP
  },() => {
    console.log(`Succesful connection!`); // waiting for it to connect before it console logs
    conn.write("Name: KLE");
  });
  
  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = { connect };