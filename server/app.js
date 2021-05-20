import express from "express";
import cors from "cors";
import logger from "morgan";
import router from "./routes/index.js";
import db from "./db/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

// in production on Heroku - re-route everything to https
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect("https://" + req.hostname + req.url);
    } else {
      next();
    }
  });
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: (origin, callback) => {
      /*
       * Get rid of port number in dev environment to allow other local apps through. Also, sometimes the origin
       * comes in as the string "null"
       */
      const originToCheck = removePortIfDev(
        !origin || origin === "null" ? "" : origin
      );
      const allowlist = [
        "http://localhost", //...(process.env.NODE_ENV !== "production" ? [ "http://localhost" ] : []),
        "https://car-brand-models.herokuapp.com",
      ];

      if (!originToCheck || allowlist.includes(originToCheck)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(logger("dev"));

app.use("/api", router);
// --> Add this

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
