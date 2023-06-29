// making the http reqest to the backend 

// just like api request

import axios from 'axios'

const API_URL = '/api/users/'



// Register user
const register = async (userData) => {
  const responce = await axios.post('https://goal-setter-app-1b56.onrender.com/api/users', userData)

  if (responce.data) {
    localStorage.setItem('user', JSON.stringify(responce.data))
  }

  return responce.data
}






// login user
const login = async (userData) => {
  const responce = await axios.post('https://goal-setter-app-1b56.onrender.com/api/users/login', userData)

  if (responce.data) {
    localStorage.setItem('user', JSON.stringify(responce.data))
  }

  return responce.data
}





// Logout user
const logout = () => {
  localStorage.removeItem('user')
}





const authService = { register, logout, login }

export default authService