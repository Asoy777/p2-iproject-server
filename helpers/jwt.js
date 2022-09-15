const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_TOKEN;

function createToken(payload) {
  return jwt.sign(payload, jwtKey);
}

function verifyToken(token) {
  return jwt.verify(token, jwtKey);
}

module.exports = { createToken, verifyToken };
