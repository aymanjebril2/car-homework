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
const whitelist = [
  "http://localhost:5000",
  "https://carbrands-name.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(logger("dev"));
const PORT = process.env.PORT || 5000;
app.use("/api", router);
// --> Add this
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
