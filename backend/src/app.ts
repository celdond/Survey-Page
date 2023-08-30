import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { postSurvey }from "./process";

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/survey', postSurvey);

export default app;
