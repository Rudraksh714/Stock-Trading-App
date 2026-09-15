const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("NO TOKEN");
    return res.status(401).json({
      status: false,
      message: "Authentication required",
    });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if (err) {
      console.log("JWT ERROR:", err.message);
      return res.status(401).json({
        status: false,
        message: "Invalid or expired token",
      });
    }

    console.log("USER ID:", data.id);
    req.userId = data.id;
    next();
  });
};
