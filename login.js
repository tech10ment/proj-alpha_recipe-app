const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", {
    style: "login"
  });
});
router.post("/", (req, res) => {
  var db = req.app.locals.db;
  db.collection("user")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      for (var i = 0; i < result.length; i++) {
        if (
          req.body.username === result[i].username &&
          req.body.password === result[i].password
        ) {
          req.session.loggedIn = true;
          req.app.locals.loggedIn = req.session.loggedIn;
          req.session.username = result[i].username;
          req.app.locals.username = req.session.username;
        }
      }
      res.redirect("/home");
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  req.app.locals.loggedIn = false;
  res.redirect("/");
});
module.exports = router;
