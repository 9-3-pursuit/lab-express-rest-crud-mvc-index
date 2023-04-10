// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

const locationsController = require("./controllers/locationsController.js");
app.use("/locations", locationsController);

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});