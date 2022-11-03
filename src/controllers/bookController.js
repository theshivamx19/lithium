const BookModel = require('../models/bookModel')

const createBook = async function(req, res){
    let data = req.body 
    let savedData = await BookModel.create(data)
    res.send({msg : savedData})
}

const bookList = async function(req, res){
    let data = await BookModel.find().select({bookName : 1, authorName : 1, _id : 0})
    res.send({msg : data})
}

const bookByYear = async function(req, res){
    let data = req.body
    let savedData = await BookModel.find({year : data.year})
    res.send({msg : savedData})
}
const getParticularBooks = async function(req, res){
    let data = req.body
    if(data.year){
    let byYearData = await BookModel.find({year : data.year})
    res.send({msg : byYearData})
    }
    if(data.bookName){
        let byNameData = await BookModel.find({bookName : data.bookName})
        res.send({msg : byNameData})
    }
    if(data.tags){
        let byTagsData = await BookModel.find({tags : data.tags})
        res.send({msg : byTagsData})
    }
}
    const getXINRBooks = async function (req, res){
        let data = req.body
        let bookByCurrency = await BookModel.find({price : {$lte : 200, $gte : 500}})
        res.send({msg : bookByCurrency})
    }
    


module.exports.createBook = createBook
module.exports.bookList =bookList
module.exports.bookByYear = bookByYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks