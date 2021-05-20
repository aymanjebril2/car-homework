import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/index.js";
import db from "./db/index.js";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

app.use("/api", router);

// --> Add this

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
