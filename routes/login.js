const express = require ('express');
const router = express.Router();
const db = require('../data/db');

// login page open
router.get('/', (req, res) => {
    res.render('login');
    console.log('login Page open')
})

// login check
router.post('/check', (req, res) => {
    let id = req.body.id;
    let password = req.body.password;
    let login = 'SELECT * FROM login WHERE id=?';

    db.query(login, [id], (error, result) => {
        if (error) {
            console.log('login error')
            throw error;
        } else {
            if (result.length > 0) {
                if (result[0].password == password) {
                    console.log('login success')
                    req.session.login = true;
                    req.session.user = id;
                    res.json({"msg" : "login success"})
                } else {
                    console.log('id or password does not match')
                    res.json({"msg" : "login fail"})
                }
            } else {
                console.log('data does not exists')
                res.json({"msg" : "no data"})
            }
        }
    })
})

// logout
router.get('/out', (req, res) => {
    req.session.destroy((err) => {
        res.json({"msg" : "logout success"})
    })
})

module.exports = router;