import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI ||
  process.env.MONGODB_URL;

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
