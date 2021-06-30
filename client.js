const net = require("net");

// establishes a connection
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: 'localhost'
  },() => {
    console.log(`Succesful connection!`);// waiting for it to connect before it console logs
    conn.write("Name: KLE");
    // conn.write("Move: up");
    conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = connect;