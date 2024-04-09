const db = require("../models");
const sabbathModal = db.sabbathModal;
const aesUtil = require("../../assets/js/aesUtil");

// Retrieve all Sabbath Doc from the database.
exports.findAll = (req, res) => {
    sabbathModal.findAll()
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