const db = require("../models");
const User = db.userModal;
const aesUtil = require("../../assets/js/aesUtil");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  let response = JSON.parse(aesUtil.decrypt(req.body.stringValue, req.get('auth_token')));
  // Username
  User.findOne({
    where: {
      Name: response.userName
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        Email: response.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  }).catch(err => {
    return res.status(500).send({ message: err.message || "Some error occurred while creating the Users." });
  });
};



const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
