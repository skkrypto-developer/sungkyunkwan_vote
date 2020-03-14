const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('vote.ejs');
    console.log('vote Page open')
})

module.exports = router;