const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('getUserKey');
        console.log('getUserKey Page open')
    } else {
        res.redirect("/login")
    }
})

router.post('/userData', (req, res) => {
    req.session.address = req.body.userAddress
    req.session.balance = req.body.userBalance
    if (req.body) {
        res.json({"msg" : "success"})
    } else {
        res.json({"msg" : "fail"})
    }
})

module.exports = router;