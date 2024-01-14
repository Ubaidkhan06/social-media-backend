const app = require("./app");
const connectDB = require("./db");

require("dotenv").config();

connectDB()
  .then(() => {
    app.listen(8081 || 5000, () => console.log("Server running on port 8081"));
  })
  .catch((err) => console.log(err));
