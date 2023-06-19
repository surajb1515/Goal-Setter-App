import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// desc         Register User
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please fill all details")
    }

    // Check if the user already exists in the DataBase
    const userExixts = await User.findOne({ email })

    if (userExixts) {
        res.status(400)
        throw new Error("user already exists")
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating user with hashedPassword
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    // If hashed user is created
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error('invalid user data')
    }

    // res.status(200).json({ message: "Register User" })
})




// desc         Authenticate a user
// @route       POST /api/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    // check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(400)
        throw new Error('invalid credentials')
    }


    res.json({ msg: 'Login User' })
})




// desc         get user data
// @route       GET /api/user/me
// @access      Public
const getMe = asyncHandler(async (req, res) => {
    res.json({ msg: 'User data display' })
})


export { registerUser, loginUser, getMe }