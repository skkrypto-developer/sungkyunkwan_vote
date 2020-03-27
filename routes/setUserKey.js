const express = require ('express');
const router = express.Router();
const db = require('../data/db');
const request = require('request');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('setUserKey');
        console.log('setUserKey Page open');
    } else {
        res.redirect("/login");
    }
});

router.post('/check', (req, res) => {
    let userKey = req.body.userKey
    let id = req.session.user
    let check = 'SELECT studentNumber FROM login WHERE id=?'

    db.query(check, [id], (error, result) => {
        if (error) {
            console.log('setUserKey check error');
            throw error
        } else {
            if (userKey == result[0].studentNumber) {

                let createWalletOptions =  {
                    method: "POST",
                    preambleCRLF: true,
                    postambleCRLF: true,
                    uri: 'https://api.luniverse.io/tx/v1.1/wallets',
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

                //create wallet
                request(createWalletOptions, (error, response, body) => {
                    if (response.statusCode == 200) {
                        let address = response.body.data.address;

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
                                res.json({
                                    "address": address,
                                    "balance": balance
                                });
                            } else {
                                console.log(error)
                                console.log("get balance error")
                                res.json({"msg": "check fail"});
                            }
                        });

                    } else {
                        console.log(error);
                        console.log("get wallet error")
                        res.json({"msg" : "check fail"});
                    }
                })
            } else {
                console.log("no data")
                res.json({"msg" : "check fail"});
            }
        } 
    })
});

router.post('/session', (req, res) => {
    if (req.body.userAddress) {
        let address = req.body.userAddress;
        let balance = req.body.userBalance;
        req.session.address = address;
        req.session.balance = balance;
        res.json({"msg" : "success"});
    } else {
        res.json({"msg" : "fail"});
    }
});
module.exports = router;