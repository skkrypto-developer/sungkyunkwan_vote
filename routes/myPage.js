const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('myPage.ejs');
    console.log(' myPage open')
})

module.exports = router;