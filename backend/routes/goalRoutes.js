import express from "express"
import { deleteGoals, getGoals, setGoals, updateGoal } from "../controllers/goalController.js";
const router = express.Router();




// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoals)

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoal).delete(deleteGoals)


export default router