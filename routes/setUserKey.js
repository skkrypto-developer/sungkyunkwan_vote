const express = require ('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('setUserKey.ejs');
    console.log('setUserKey Page open')
})

module.exports = router;