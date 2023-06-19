import asyncHandler from 'express-async-handler'
import Goal from '../models/goalModel.js'








// desc         Get Goals
// @route       Get /api/goals
// @access      Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})








// desc         Set Goals
// @route       POST /api/goals
// @access      Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        // user: req.body.id
    })

    res.status(200).json(goal)
})







// desc         Updata Goals
// @route       PUT /api/goals:id
// @access      Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,          // it will create new if not created in the database
    })

    res.status(200).json(updatedGoal)
})








// desc         Delete Goals
// @route       DELETE /api/goals:id
// @access      Private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})



export { setGoals, getGoals, updateGoal, deleteGoals }