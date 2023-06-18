// desc         Get Goals
// @route       Get /api/goals
// @access      Private
const getGoals = (req, res) => {
    res.status(200).json({ msg: "Get Goals" })
}



// desc         Set Goals
// @route       POST /api/goals
// @access      Private
const setGoals = (req, res) => {
    res.status(200).json({ msg: "Set Goals" })
}




// desc         Updata Goals
// @route       PUT /api/goals:id
// @access      Private
const updateGoal = (req, res) => {
    res.status(200).json({ msg: `Update Goals1 ${req.params.id}` })
}




// desc         Delete Goals
// @route       DELETE /api/goals:id
// @access      Private
const deleteGoals = (req, res) => {
    res.status(200).json({ msg: `Delete Goals1 ${req.params.id}` })
}



export { setGoals, getGoals, updateGoal, deleteGoals }