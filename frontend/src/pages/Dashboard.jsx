import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import GoalForm from '../Components/GoalForm'
import Spinner from '../Components/Spinner'
import { getGoals, reset } from '../appRedux/goal/goalSlice'
import GoalItem from '../Components/GoalItem'


const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state.NAME of the reducer
  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goal)




  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login")
    }
    else { dispatch(getGoals()) }
    // it will fetch the goals from the backend
    // suraj
    // if (!user) {
    // dispatch(getGoals())
    // }

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])


  if (isLoading) {
    return <Spinner />
  }



  return (
    <>
      <section className="heading">
        <h1 className='mx-10 my-4 text-5xl font-bold text-gray-800 md:text-6xl md:mx-20'>Welcome, {user && user.name}</h1>
        {/* <p>Goals Dashboard</p> */}
      </section>
      <GoalForm />


      <section className='mx-10 mt-3 md:mx-20'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((it) => (
              <GoalItem key={it._id} goal={it} />
            ))}
          </div>
        ) : (
          <h3 className='text-xl font-semibold text-gray-600'>You have not set any goals</h3>
        )}
      </section>


    </>
  )
}

export default Dashboard
