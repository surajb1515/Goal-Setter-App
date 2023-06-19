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
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('invalid user data')
    }

    // res.status(200).json({ message: "Register User" })
})











// desc         Authenticate a user
// @route       POST /api/users/login
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
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('invalid credentials')
    }


    // res.json({ msg: 'Login User' })
})














// desc         get user data
// @route       GET /api/users/me
// @access      Private
const getMe = asyncHandler(async (req, res) => {
    // we have recieved id from the authmiddleware
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})



// Generate JWT TOKEN
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export { registerUser, loginUser, getMe }