const express = require ('express');
const router = express.Router();
const db = require('../data/db')

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('vote');
        console.log('vote Page open')
    } else {
        res.redirect("/login")
    }
})

router.post('/userKey', (req, res) => {
    let id = req.session.user
    let getUserKey = 'SELECT studentNumber FROM login WHERE id=?'

    db.query(getUserKey, [id], (error, result) => {
        if (error) {
            console.log('get userkey error')
            throw error
        } else {
            res.json({"userKey" : result[0].studentNumber})
        }
    })
})

module.exports = router;