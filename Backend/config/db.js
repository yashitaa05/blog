let mongoose = require("mongoose");
let dns = require("dns");
require("dotenv").config();

// Use a public DNS resolver if local DNS blocks SRV lookups for Atlas
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MongoDB connection failed: MONGO_URI is not defined in .env");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const blog = mongoose.connection;
blog.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

module.exports = blog;