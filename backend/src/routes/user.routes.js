import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("This response came from the user routes!");
});

export default router;