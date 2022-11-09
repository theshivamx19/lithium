const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const auth = require('../middlewares/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createUser', userController.createUser)
router.post('/loginUser', userController.loginUser)
router.post('/updateUser/:userId', auth.authenticate, userController.updateUser)
router.get('/getUser/:userId', auth.authenticate, userController.getUser)
router.get('/deleteUser/:userId', auth.authenticate, userController.deleteUser)

module.exports = router;