const express = require ('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('menu.ejs');
    console.log('menu Page open')
})

module.exports = router;