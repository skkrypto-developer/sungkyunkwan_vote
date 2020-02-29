const express = require ('express');
const router = express.Router();

// router.get('/', function(req, res) {
//     res.render('wallet.ejs');
//     console.log('wallet Page open')
// });

router.post('/', (req, res, next) => {
    console.log(req.body)
    let id = req.body.id;
    let password = req.body.password;
    req.session.userKey = id;
    res.render('wallet.ejs', {id: id, password: password});
    console.log(req.session)
    console.log(req.session.userKey)
});

module.exports = router;