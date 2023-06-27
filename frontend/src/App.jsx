import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from '../src/Components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <>
      {/* <Router> */}
      <div className="">
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
