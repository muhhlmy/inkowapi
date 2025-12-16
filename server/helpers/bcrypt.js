const bcrypt = require("bcryptjs");

function hash(value) {
  if (value) {
    return bcrypt.hashSync(value.toString(), 10);
  } else throw { name: "badRequest" };
}

function compareHash(value, encryptedValue) {
  return bcrypt.compareSync(value.toString(), encryptedValue);
}
module.exports = { hash, compareHash };
