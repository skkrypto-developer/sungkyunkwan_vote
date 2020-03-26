const express = require ('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('vote');
        console.log('vote Page open')
    } else {
        res.redirect("/login")
    }
})

router.get('/userAddress', async (req, res) => {
    let address = req.session.address;
    // res.json({address: address})

    const options = {
        uri: "https://api.luniverse.io/tx/v1.1/wallets/" + address + "/FT9754/SK/balance",
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
        }
    }
    try {
        let response = await request(options);
        obj = JSON.parse(response)
        console.log(obj)     
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;