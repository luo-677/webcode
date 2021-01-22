const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(path.join(__dirname, "../ras/private_key.pem"));
const publicKey = fs.readFileSync(path.join(__dirname, "../ras/public_key.pem"));

function createToken(data) {
    let token = jwt.sign(data, privateKey);
    return token;
}

function checkToken(token) {

}