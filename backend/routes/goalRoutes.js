import express from "express"
const router = express.Router();



router.get('/g', (req, res) => {
    res.status(200).json({ msg: 'Get Goals' })
})


export default router