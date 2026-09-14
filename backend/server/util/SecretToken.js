require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};


// jwt.sign(
//    kya store karna hai,
//    kis secret se sign karna hai,
//    kitne time valid hai
// )