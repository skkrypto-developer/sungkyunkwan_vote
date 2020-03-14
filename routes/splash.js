const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('splash.ejs');
    console.log('splash Page open')
})

module.exports = router;