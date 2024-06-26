const db = require("../models");
const userModal = db.userModal;
const aesUtil = require("../../assets/js/aesUtil");

// Retrieve all User List from the database.
exports.findAll = (req, res) => {
  console.log('findAll');
  userModal.findAll()
    .then(data => {
      res.setHeader('auth_token', global.auth_token);
      res.status(200).json(aesUtil.testEncrypt(JSON.stringify(data), global.auth_token));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
};
