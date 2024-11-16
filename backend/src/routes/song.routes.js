import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("This response came from the songs routes!");
});

export default router;