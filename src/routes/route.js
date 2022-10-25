const express = require('express');
const router = express.Router();

router.get('/person', function (req, res) {
    let voterAge = req.query.votingAge
    let eligibleVoters = []

    let persons = [
        {
            name: "PK",
            age: 10,
            votingStatus: false
        },
        {
            name: "SK",
            age: 20,
            votingStatus: false
        },
        {
            name: "AA",
            age: 70,
            votingStatus: false
        },
        {
            name: "SC",
            age: 5,
            votingStatus: false
        },
        {
            name: "HO",
            age: 40,
            votingStatus: false
        }
    ]
   
    let data = persons.forEach(person => {
        if (person.age >= voterAge)
            person.votingStatus = true
        if (person.votingStatus == true) {
            eligibleVoters.push(person)
        }
    })
    res.send({ data: eligibleVoters })
})


module.exports = router;