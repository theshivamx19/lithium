const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
  const data = req.body
  let savedData = await userModel.create(data)
  res.send({ data: savedData })
}
const loginUser = async function (req, res) {
  const loginId = req.body.emailId
  const password = req.body.password
  // const { emailId, password } = loginData
  let user = await userModel.findOne({ emailId: loginId, password: password })
  if (!user) {
    return res.send({ msg: 'user does not exist' })
  }
  let token = jwt.sign({
    userId: user._id.toString(),
    batch: "Lithium"
  }, 'mySecretKey')
  res.setHeader("x-auth-token", token)
  return res.send({ status: true, data: token })

}

const getUser = async function (req, res) {
  // let token = req.headers['X-Auth-Token']
  // if (!token) token = req.headers['x-auth-token']
  // console.log(token)
  // if (!token) {
  //   return res.send({ status: false, msg: 'Token must be present' })
  // }
  // let decodedToken = jwt.verify(token, 'mySecretKey')
  // console.log(decodedToken)
  // if (!decodedToken) {
  //   return res.send({ status: false, msg: 'Token is invalid' })
  // }
  const userId = req.params.userId
  let user = await userModel.findById({ _id: userId })
  if (!user) {
    return res.send({ status: false, msg: 'User does not exists' })
  }

  return res.send({ status: true, data: user })

}

const updateUser = async function (req, res) {
  // let token = req.headers['X-Auth-Token']
  // if (!token)
  //   token = req.headers['x-auth-token']
  // if (!token) {
  //   return res.send({ status: false, msg: 'token must be present' })
  // }
  const userId = req.params.userId
  const data = req.body
  const user = await userModel.findById(userId)
  if (!user) {
    return res.send({ msg: 'user does not exists' })
  }
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, data, { new: true })
  return res.send({ status: true, data: updatedUser })
}

const deleteUser = async function (req, res) {
  // let token = req.headers['X-Auth-Token']
  // if (!token)
  //   token = req.headers['x-auth-token']
  // if (!token) {
  //   return res.send({ status: false, msg: 'token must be present' })
  // }
  const userId = req.params.userId
  let user = await userModel.findById({ _id: userId })
  if (!user) {
    return res.send({ status: false, msg: 'user does not exists' })
  }
  let { isDeleted } = user
  if (isDeleted === true) {
    return res.send({ status: false, msg: 'user is already deleted' })
  }
  let findUser = await userModel.findByIdAndUpdate(userId, { isDeleted: true }, { new: true })
  return res.send({ status: true, data: findUser, msg: 'User deleted successfully' })
}

module.exports.loginUser = loginUser
module.exports.createUser = createUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
