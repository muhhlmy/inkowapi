require("dotenv").config();
const jwt = require("jsonwebtoken");
const keys = process.env.JWT_SECRET;

// console.log(keys, "<<<<key");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      privilage: user.privilage,
    },
    keys,
    { expiresIn: "1d" }
  );
}
function generateTokenPublicUser(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      type: user.type,
    },
    keys,
    { expiresIn: "1d" }
  );
}
function generateTokenReqOutbox(user, status, outboxId, type) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      privilage: user.privilage,
      status: status,
      outboxId: outboxId,
      type: type,
    },
    keys,
    { expiresIn: "1d" }
  );
}

function generateTokenPdf(IOID, type) {
  return jwt.sign(
    {
      id: IOID,
      type: type
    },
    keys
  );
}

function verifyToken(token) {
  // console.log(token, "!!!!!!!!!!!!!!!!!!!!!");
  return jwt.verify(token, keys);
}

module.exports = {
  generateToken,
  verifyToken,
  generateTokenReqOutbox,
  generateTokenPublicUser,
  generateTokenPdf
};
