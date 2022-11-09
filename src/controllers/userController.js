const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
  try {
    const data = req.body
    if (!data) {
      return res.status(400).send({ status: false, msg: 'Body data is required' })
    }
    let savedData = await userModel.create(data)
    return res.status(201).send({ status: true, data: savedData })
  }
  catch (err) {
    return res.status(500).send({ status: false, error: err.message })
  }
}


const loginUser = async function (req, res) {
  try {
    const loginId = req.body.emailId
    const password = req.body.password
    // const { emailId, password } = loginData
    let user = await userModel.findOne({ emailId: loginId, password: password })
    if (!user) {
      return res.status(404).send({ status: false, msg: 'user does not exist' })
    }
    let token = jwt.sign({
      userId: user._id.toString(),
      batch: "Lithium"
    }, 'mySecretKey')
    res.setHeader("x-auth-token", token)
    return res.status(200).send({ status: true, data: token })
  }
  catch (err) {
    return res.status(500).send({ status: false, error: err.message })
  }

}

const getUser = async function (req, res) {
  try {
    const userId = req.params.userId
    let user = await userModel.findById({ _id: userId })
    if (!user) {
      return res.status(404).send({ status: false, msg: 'User does not exists' })
    }

    return res.status(200).send({ status: true, data: user })
  }
  catch (err) {
    return res.status(500).send({ status: false, error: err.message })
  }

}

const updateUser = async function (req, res) {
  try {
    const userId = req.params.userId
    const data = req.body
    const user = await userModel.findById(userId)
    if (!user) {
      return res.status(404).send({ status: false, msg: 'user does not exists' })
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, data, { new: true })
    return res.status(201).send({ status: true, data: updatedUser })
  }
  catch (err) {
    return res.status(500).send({ status: false, error: err.message })
  }
}

const deleteUser = async function (req, res) {
  try {
    const userId = req.params.userId
    let user = await userModel.findById({ _id: userId })
    if (!user) {
      return res.status(404).send({ status: false, msg: 'user does not exists' })
    }
    let { isDeleted } = user
    if (isDeleted === true) {
      return res.status(400).send({ status: false, msg: 'user is already deleted' })
    }
    let findUser = await userModel.findByIdAndUpdate(userId, { isDeleted: true }, { new: true })
    return res.status(200).send({ status: true, data: findUser, msg: 'User deleted successfully' })
  }
  catch (err) {
    return res.status(500).send({ status: false, error: err.message })
  }
}

module.exports.loginUser = loginUser
module.exports.createUser = createUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
