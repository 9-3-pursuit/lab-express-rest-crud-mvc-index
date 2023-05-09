require("dotenv").config();
const app = require("./app.js");
const port = process.env.port;

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
