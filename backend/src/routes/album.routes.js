import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("This response came from the album routes!");
});

export default router;