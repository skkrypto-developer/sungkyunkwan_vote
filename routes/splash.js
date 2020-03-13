const express = require ('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('splash.ejs');
    console.log('splash Page open')
})

module.exports = router;