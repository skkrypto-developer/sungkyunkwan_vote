const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('menu');
        console.log('menu Page open')
    } else {
        res.redirect('/login')
    }
})

module.exports = router;