const bcryptjs = require("bcryptjs");
const hashSalt = process.env.HASH_SALT;

function cryptPassword(password) {
  return bcryptjs.hashSync(password, hashSalt);
}

function hashCheck(password, hash) {
  return bcryptjs.compareSync(password, hash);
}

module.exports = { cryptPassword, hashCheck };
