import express from 'express';

const router = express.Router();

router.post("/signup", (req, res) => {
    res.send("Signup route working!");
});


export default router;
