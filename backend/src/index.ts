import express from "express";
import { EXPRESS_PORT } from "./config/environment";
import { auth } from "express-openid-connect";
import { config } from "./config/auth";
import { documentRoute } from "./routes/documents";

const app = express();
app.use(auth(config));

app.use("/documents", documentRoute);

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});
