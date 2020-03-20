const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('vote');
        console.log('vote Page open')
    } else {
        res.redirect("/login")
    }
})

router.get('/userAddress', (req, res) => {
    let address = req.session.address;
    res.json({address: address})
})

module.exports = router;