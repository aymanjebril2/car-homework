import mongoose from "mongoose";

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/dealershipDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.log("Connection error", e);
  });

const db = mongoose.connection;

export default db;
