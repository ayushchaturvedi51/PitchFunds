import express from "express";
import router from "./routes";
import cors from "cors"
import { envConfigs } from "./config/envconfig";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*"}));

app.use("/", router);

app.listen(envConfigs.port, () => {
  console.log(`Server started on ${envConfigs.port}`);
});
