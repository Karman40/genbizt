var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "simpleangular"
});
router.post('/register', async function (req, res, next) {
    try {
        let { name, username, email, phone, password } = req.body;
        const hashed_password = md5(password.toString())
        const checkUsername = `Select username FROM users WHERE username = ?`;
        con.query(checkUsername, [username], (err, result, fields) => {
            if (!result.length) {
                const sql = `Insert Into users (name, username, email, phone, password) VALUES ( ?, ?, ? )`
                con.query(
                    sql, [name, username, email, phone, hashed_password],
                    (err, result, fields) => {
                        if (err) {
                            res.send({ status: 0, data: err });
                        } else {
                            let token = jwt.sign({ data: result }, 'secret')
                            res.send({ status: 1, data: result, token: token });
                        }
                    })
            }
        });
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});
router.post('/login', async function (req, res, next) {
    try {
        let { username, password } = req.body;
        const hashed_password = md5(password.toString())
        const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
        con.query(
            sql, [username, hashed_password],
            function (err, result, fields) {
                if (err) {
                    res.send({ status: 0, data: err });
                } else {
                    let token = jwt.sign({ data: result }, 'secret')
                    res.send({ status: 1, data: result, token: token });
                }
            })
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});
module.exports = router;
