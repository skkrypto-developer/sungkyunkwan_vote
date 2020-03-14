const express = require ('express');
const router = express.Router();
const db = require('../data/db');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('setUserKey.ejs');
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

module.exports = router;