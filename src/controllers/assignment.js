let myData = function(req, res){
    let myDate = new Date()
    let myIp = req.ip
    let path = req.originalUrl
    return res.send({myIp, path, myDate})
}
module.exports.myData = myData