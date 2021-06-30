const net = require("net");

// establishes a connection
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: 'localhost'
  },() => {
    console.log(`Succesful connection!`) // waiting for it to connect before it console logs
  });
  
  // console.log(`hello`) // no requirement for it to finish something
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = connect