const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.get("/bookList", BookController.bookList)
router.post("/bookByYear", BookController.bookByYear)
router.post("/getParticularBooks", BookController.getParticularBooks)
router.post("/getXINRBooks", BookController.getXINRBooks)

module.exports = router;