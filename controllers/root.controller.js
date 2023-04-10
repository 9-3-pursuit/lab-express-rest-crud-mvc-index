const root = express.Router();

const rootHandler = (req, res) => {
  res.send("Hello, World!");
};

plans.get("/", rootHandler);

module.exports = root;
