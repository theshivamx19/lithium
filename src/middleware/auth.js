const jwt = require('jsonwebtoken')

let authenticate = function (req, res, next) {
    try{
    let token = req.headers['X-Auth-Token']
    if (!token)
        token = req.headers['x-auth-token']
    if (!token) {
        return res.status(400).send({ status: false, msg: 'token must be present' })
    }
    let decodedToken = jwt.verify(token, 'mySecretKey')
    if (!decodedToken) {
        return res.status(400).send({ status: false, msg: 'Invalid Token' })
    }
    let userId = req.params.userId
    let loggedInUser = decodedToken.userId
    if (loggedInUser !== userId) {
        return res.status(401).send({ status: false, msg: "You are not authorized" })
    }
    next()
}
catch(err){
    return res.status(500).send({status : false, error : err.message})
  }
}
module.exports.authenticate = authenticate
