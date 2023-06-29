import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from "../appRedux/goal/goalSlice"



const GoalItem = ({ goal }) => {

  const dispatch = useDispatch();



  return (
    <div className='max-w-2xl p-3 mb-3 bg-gray-200 rounded-lg'>
      <div className="flex justify-between max-w-2xl">
        <div className='text-sm font-medium text-gray-600'>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <button
          className="text-xl font-bold text-red-600 transition duration-300 hover:scale-125"
          onClick={() => dispatch(deleteGoal(goal._id))}>
          X
        </button>
      </div>
      <h2 className='text-2xl font-semibold'>{goal.text}</h2>
    </div>
  )
}

export default GoalItem
