const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('setUserKey');
        console.log('setUserKey Page open')
    } else {
        res.redirect("/login")
    }
})

router.post('/check', (req, res) => {
    let userKey = req.body.userKey
    let id = req.session.user
    let check = 'SELECT studentNumber FROM login WHERE id=?'

    db.query(check, [id], (error, result) => {
        if (error) {
            console.log('setUserKey check error')
            throw error
        } else {
            if (userKey == result[0].studentNumber) {
                res.json({"msg" : "check success"})
            } else {
                res.json({"msg" : "check fail"})
            }
        } 
    })
})

router.post('/userAddress', (req, res) => {
    req.session.address = req.body.userAddress
    console.log(req.session)
    res.json({"msg" : "success"})
})
module.exports = router;