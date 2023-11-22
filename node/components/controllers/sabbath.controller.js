const db = require("../models");
const Documents = db.Documents;

// Retrieve all Sabbath Doc from the database.
exports.findAll = (req, res) => {

  Documents.findAll()
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