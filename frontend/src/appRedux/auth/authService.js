// making the http reqest to the backend 

// just like api request

import axios from 'axios'

const API_URL = '/api/users/'



// Register user
const register = async (userData) => {
  const responce = await axios.post('http://localhost:8000/api/users', userData)

  if (responce.data) {
    localStorage.setItem('user', JSON.stringify(responce.data))
  }

  return responce.data
}


const authService = { register }

export default authService