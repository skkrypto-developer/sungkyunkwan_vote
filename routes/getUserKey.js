const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('getUserKey');
        console.log('getUserKey Page open')
    } else {
        res.redirect("/login")
    }
})

router.post('/userData', async (req, res) => {
    let userKey = req.body.userKey;

    let walletOptions = {
        method: "GET",
        preambleCRLF: true,
        postambleCRLF: true,
        uri: "https://api.luniverse.io/tx/v1.1/wallets/bridge",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
        },
        body: {
            'walletType': "LUNIVERSE",
            'userKey': userKey
        },
        json: true
    };

    // get wallet
    request(walletOptions, (error, response, body) => {
        if (response.statusCode == 200) {
            let address = response.body.data.address

            let balanceOptions = {
                method: "GET",
                preambleCRLF: true,
                postambleCRLF: true,
                uri: 'https://api.luniverse.io/tx/v1.1/wallets/' + address + '/FT9754/SK/balance',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                },
                json: true
            };

            // get balance
            request(balanceOptions, (error, response, body) => {
                if (response.statusCode == 200) {
                    let balance = response.body.data.balance;
                    console.log(response.body.data.balance)
                    console.log(address)
                    res.json({
                        "address": address,
                        "balance": balance
                    })
                } else {
                    console.log(error)
                    res.json({"msg": "fail"})
                }
            });
        }
        else {
            console.log(error);
            res.json({ "msg": "fail" })
        }
    });


})

router.post('/session', (req, res) => {
    if (req.body.userAddress) {
        let address = req.body.userAddress;
        let balance = req.body.userBalance;
        req.session.address = address;
        req.session.balance = balance;
        res.json({ "msg": "success" });
    } else {
        res.json({ "msg": "fail" });
    }
})

module.exports = router;