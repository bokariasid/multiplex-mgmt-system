const mongoose = require("mongoose");
// !IMPORTANT: Create .env file with password
const password = process.env.PASSWORD || "changePasswordHere";
let devUrl = `mongodb://root:${password}@localhost:27017/?connectTimeoutMS=3000&retryWrites=true&w=majority`;
var mongoDB = process.env.MONGODB_URI || devUrl;
// Set up the Mongoose connection.
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {console.error(error);process.exit(0)});
let db = mongoose.connection;

// Bind the connection to an error event to get notification of connection
// errors.
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Displays a success message when the connection is successfully made.
db.once("open", function () {
  console.log("Connected successfully.");
});