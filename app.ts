import express from "express";
import { gameRouter } from "./routes/game";

const app = express();
app.use(gameRouter);

export default app;
