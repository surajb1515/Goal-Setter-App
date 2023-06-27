import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      {/* <nav className="flex mx-auto bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a
            target="_blank"
            href="https://youtube.com/"
            className="flex items-center"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GoalSetter
            </span>
          </a>
          <div
            className=""
            id="navbar-default"
          >
            <ul className="flex p-4 mt-4 font-medium rounded-lg md:p-0md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="flex justify-between px-5 py-2 pt-3 pb-4 overflow-hidden">
        <div className="">
          <h1 className="self-center py-2 text-2xl font-bold whitespace-nowrap dark:text-white">Goal Setter</h1>
        </div>

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
        </div>
      </nav>
    </>
  )
}

export default Header
