const db = require("../models");
const BibleCommentary = db.BibleCommentary;

// Retrieve all Sabbath Doc from the database.
exports.findAll = (req, res) => {

  BibleCommentary.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
};