const db = require("../models");
const BibleCommentary = db.BibleCommentary;
const aesUtil = require("../../assets/js/aesUtil");

// Retrieve all Sabbath Doc from the database.
exports.findAll = (req, res) => {
  BibleCommentary.findAll()
    .then(data => {
      res.status(200).json(aesUtil.testEncrypt(JSON.stringify(data), global.auth_token));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
};