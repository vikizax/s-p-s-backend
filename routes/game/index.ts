import { Router } from "express";
import { resolve, join } from "path";
import { v4 as uuid } from "uuid";

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(join(resolve(__dirname, "../../"), "/index.html"));
});

// router.get('/auth/signup', (req, res) => {

// })

router.get('/start', (req, res) => {
  
})

export const gameRouter = router;
