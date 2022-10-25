const BookModel = require('../models/bookModel')

const createBook = async function(req, res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg : savedData})
}


const findBook = async function(req, res){
    let allData = await BookModel.find().select({bookName : 1, _id : 0})
    res.send({msg : allData})
}

module.exports.createBook = createBook
module.exports.findBook = findBook