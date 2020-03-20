const express = require ('express');
const router = express.Router();
const db = require('../data/db')

let address = ""
let token = 0

router.get('/userKey', (req, res, next) => {
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

router.post('/userInfo', (req, res, next) => {
    console.log(req.body)
    token = req.body.userToken
    address = req.body.userAddress
})

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('myPage', {
            ejsToken : token,
            ejsAddress : address
        });
        console.log('myPage open')
    } else {
        res.redirect('/login')
    }
})




module.exports = router;