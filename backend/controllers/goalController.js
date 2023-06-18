import asyncHandler from 'express-async-handler'


// desc         Get Goals
// @route       Get /api/goals
// @access      Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "Get Goals" })
})



// desc         Set Goals
// @route       POST /api/goals
// @access      Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
})




// desc         Updata Goals
// @route       PUT /api/goals:id
// @access      Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Update Goals1 ${req.params.id}` })
})




// desc         Delete Goals
// @route       DELETE /api/goals:id
// @access      Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Delete Goals1 ${req.params.id}` })
})



export { setGoals, getGoals, updateGoal, deleteGoals }