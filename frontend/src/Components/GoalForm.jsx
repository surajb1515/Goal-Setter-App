import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createGoal, getGoals } from '../appRedux/goal/goalSlice'


const GoalForm = () => {

  const [text, setText] = useState('');
  const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  // suraj
  // useEffect(() => {
  //   dispatch(getGoals())
  // }, [])



  return (
    <div className='mx-10 mt-20 md:mx-20'>
      {/* <h1 className="text-3xl font-semibold text-gray-900">Goal</h1> */}
      <form onSubmit={onSubmit}>
        <div className='font-semibold text-gray-900 '>
          <label htmlFor='text' className='text-3xl'>Goal</label>
          <input
            type="text"
            name="name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-4 max-w-2xl bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
            placeholder="Enter your goals"
            required=""
          />
        </div>
        <div className='form-group'>
          <button
            type="submit"
            className="my-5 w-60 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Goals
          </button>
        </div>
      </form>
    </div>
  )
}

export default GoalForm
