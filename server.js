const app = require();

require("dotenv").config();

const PORT = process.env.PORT;

const locationController = require("./controllers/locations.controller");
app.use("/locations", locationController);

const defaultListener = () => {
  console.log(`Listening on port: ${PORT} ...`);
};

app.listen(PORT, defaultListener);
