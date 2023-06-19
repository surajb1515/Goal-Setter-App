import express from "express"
import { deleteGoals, getGoals, setGoals, updateGoal } from "../controllers/goalController.js";
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router();




// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoals)

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoals)


export default router