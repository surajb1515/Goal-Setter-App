import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../appRedux/auth/authSlice"



const Header = () => {

  const nagivate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    nagivate("/")
  }




  return (
    <>

      <nav className="flex justify-between px-5 py-2 pt-3 pb-4 overflow-hidden">
        <div className="">
          <h1 className="self-center py-2 text-2xl font-bold whitespace-nowrap dark:text-white">Goal Setter</h1>
        </div>


        {user ? (
          <button
            onClick={onLogout}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            logout
          </button>
        ) :
          (<>
            <div className="flex font-semibold">
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                login
              </Link>
              <Link
                to="/register"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Register
              </Link>
            </div >
          </>
          )}


      </nav>
    </>
  )
}

export default Header
