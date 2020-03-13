const express = require ('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('myPage.ejs');
    console.log(' myPage open')
})

module.exports = router;