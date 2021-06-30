const setupInput = require("./input");
const { connect } = require("./client"); // Use object desctructuring

console.log("Connecting ...");

const conn = connect();
setupInput(conn);