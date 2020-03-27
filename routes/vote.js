const express = require ('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('vote');
        console.log('vote Page open')
    } else {
        res.redirect("/login");
    }
});

router.get('/candidate1', (req,res) => {
    
    // check if user did vote
    if(req.session.balance != 0) {
        res.json({"msg" : "voting fail"});
    } else {
        let address = req.session.address;

        let voteOptions = {
            method: "POST",
            preambleCRLF: true,
            postambleCRLF: true,
            uri: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            body: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "0"
                }
            },
            json: true
        };

        // voting
        request(voteOptions, (error, response, body) => {
            if (response.body.result) {

                let tokenOptions = {
                    method: "POST",
                    preambleCRLF: true,
                    postambleCRLF: true,
                    uri: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    body: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    json: true
                };

                // reward
                request(tokenOptions, (error, response, body) => {
                    if (response.body.result) {
                        res.json({"msg" : "voting success"})
                    } else {
                        res.json({"msg" : "token error"})
                    }
                });

            } else {
                res.json({"msg" : "voting error"});
            }
        });
    }

});

router.get('/candidate2', (req,res) => {

    // check if user did vote
    if(req.session.balance != 0) {
        res.json({"msg" : "voting fail"});
    } else {
        let address = req.session.address;

        let voteOptions = {
            method: "POST",
            preambleCRLF: true,
            postambleCRLF: true,
            uri: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            body: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "1"
                }
            },
            json: true
        };

        // voting
        request(voteOptions, (error, response, body) => {
            if (response.body.result) {

                let tokenOptions = {
                    method: "POST",
                    preambleCRLF: true,
                    postambleCRLF: true,
                    uri: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    body: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    json: true
                };

                // reward
                request(tokenOptions, (error, response, body) => {
                    if (response.body.result) {
                        res.json({"msg" : "voting success"})
                    } else {
                        res.json({"msg" : "token error"})
                    }
                });

            } else {
                res.json({"msg" : "voting error"})
            }
        });
    }

});

router.get('/giveUp', (req,res) => {

    // check if user did vote
    if(req.session.balance != 0) {
        res.json({"msg" : "voting fail"});
    } else {
        let address = req.session.address;

        let voteOptions = {
            method: "POST",
            preambleCRLF: true,
            postambleCRLF: true,
            uri: 'https://api.luniverse.io/tx/v1.1/transactions/voting',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
            },
            body: {
                "from" : address,
                "inputs" : {
                    "candidatenum" : "2"
                }
            },
            json: true
        };

        // voting
        request(voteOptions, (error, response, body) => {
            if (response.body.result) {

                let tokenOptions = {
                    method: "POST",
                    preambleCRLF: true,
                    postambleCRLF: true,
                    uri: 'https://api.luniverse.io/tx/v1.1/transactions/RealReward',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "nkknsGRmsvxZhaK1Zfj6hmqHRcHA6QQXUBcwqqysyVqPSMkDCQH2GAeyxGquMKL2"
                    },
                    body: {
                        "inputs" : {
                            "receiverAddress" : address,
                            "valueAmount" : "1"
                        }
                    },
                    json: true
                };

                // reward
                request(tokenOptions, (error, response, body) => {
                    if (response.body.result) {
                        res.json({"msg" : "voting success"})
                    } else {
                        res.json({"msg" : "token error"})
                    }
                });

            } else {
                res.json({"msg" : "voting error"})
            }
        });
    }
});

module.exports = router;