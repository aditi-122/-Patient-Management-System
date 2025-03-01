const express = require("express");
const AuthenticationRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
AuthenticationRoute.post('/auth/register', (req, res) => {
    try {
        let email = req.body.email;
        let myPlaintextPassword = req.body.password
        bcrypt.hash(myPlaintextPassword, SALT_ROUNDS, async function (err, hash) {
            if (err) {
                res.status(500).json({ msg: "registeration falied" });
            }
            let user = { ...req.body, password: hash };
            await UserModel.create(user);
            res.status(201).json({ msg: "Registration Done", email: req.body.email, password: req.body.password });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Registration Failed" });
    }
})
AuthenticationRoute.post("/auth/login", async (req, res) => {
    try {
        let user = await UserModel.findOne({ email: req.body.email });
        res.status(200).json({ msg: "Login Sucessfull", user: req.body.userId });
        bcrypt.hash(myPlaintextPassword, SALT_ROUNDS, async function (err, hash) {
            if (err) {
                res.status(500).json({ msg: "registeration falied" });
            }
            else {
                let myPlaintextPassword = req.body.password;
                let hashedPassword = user.password;
                bcrypt.compare(myPlaintextPassword, hashedPassword, function (err, result) {
                    if (err) {
                        res.status(500).json({ msg: 'Login Falied' });
                    }
                    if (!result) {
                        let data = { userId: user.id };
                        let token = jwt.sign({ data }, JWT_SECRET_KEY, { expiresIn: 60 * 60 });
                        res.status(200).json({ msg: "Login sucessfull", token });
                    }
                    else {
                        res.status(400).json({ msg: "Login Falied" });
                    }
                });
            }
        }
    catch (err) {
            console.log(err);
            res.status(500).json({ msg: "Registration Failed" });
        }
    })
module.exports = AuthenticationRoute;