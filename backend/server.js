import express from "express";
import approutes from "./routes/app.routes.js";
import env from "./config/environment.js";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";

/** CONFIGURATION */
const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

/** ROUTES */
app.use("/", approutes);

const port = env.port;
connectDB()
  .then((connectedDb) => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
      console.log(`connected to DB :: ${connectedDb.name}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
