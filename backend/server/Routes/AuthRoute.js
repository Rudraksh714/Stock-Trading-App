const { Signup, Login, Logout } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
const User = require("../Models/UserModel");

router.post("/signup", Signup);
router.post("/login", Login);

router.post("/", userVerification, (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        return res.json({ status: false });
      }
      return res.json({ status: true, user: user.username });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: false });
    });
});

router.post("/logout", Logout);

module.exports = router;