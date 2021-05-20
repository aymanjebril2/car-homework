import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/index.js";
import db from "./db/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(logger("dev"));
const PORT = process.env.PORT || 5000;
app.use("/api", router);
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
