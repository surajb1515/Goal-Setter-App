import express from "express"
const router = express.Router();
import userRoutes from './userRoutes.js'
import goalRoutes from './goalRoutes.js'



router.use('/users', userRoutes)
router.use('/goals', goalRoutes)


export default router