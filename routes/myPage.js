const express = require ('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    if (req.session.login) {
    res.render('myPage', {
        ejsToken : req.session.balance,
        ejsAddress : req.session.address
    });
        console.log('myPage open')

    } else {
        res.redirect('/login')
    }
});

module.exports = router;