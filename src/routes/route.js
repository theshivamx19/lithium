const express = require('express');
const router = express.Router();

const logger = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')
const month = require('../month/monthName')
const union = require('../union/union')

// router.get('/test-me', function (req, res) {
//     res.send('My first ever API')
//     console.log(logger.myFunc())
// })

// router.get('/test-me', function (req, res) {
//     res.send('My first ever API')
//     console.log(helper.printDate())
//     console.log(helper.printMonth())
//     console.log(helper.getBatchInfo())
// })

// router.get('/test-me', function (req, res) {
//     res.send('My first ever API')
//     console.log(validator.trim())
//     console.log(validator.changeToUpperCase())
//     console.log(validator.changetoLowerCase())
// })

// router.get('/test-me', function (req, res) {
//     res.send('My first ever API')
//     console.log(month.monthNames)
//     console.log(month.tailedArr)
// })

router.get('/test-me', function (req, res) {
    res.send('My first ever API')
    console.log('Union of the arrays : ', union.unionArr)
    console.log('Pairs are : ', union.paired)
})

module.exports = router;