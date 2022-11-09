const jwt = require('jsonwebtoken')

let authenticate = function (req, res, next) {
    let token = req.headers['X-Auth-Token']
    if (!token)
        token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ status: false, msg: 'token must be present' })
    }
    let decodedToken = jwt.verify(token, 'mySecretKey')
    if (!decodedToken) {
        return res.send({ status: false, msg: 'Invalid Token' })
    }
    let userId = req.params.userId
    let loggedInUser = decodedToken.userId
    if (loggedInUser !== userId) {
        return res.send({ status: false, msg: "You are not authorized" })
    }
    next()
}
module.exports.authenticate = authenticate
