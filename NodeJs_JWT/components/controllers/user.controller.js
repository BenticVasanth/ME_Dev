const db = require("../models");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  db.user.findAll()
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
  //res.status(200).send("User Content.");
};

exports.userListBoard = (req, res) => {
  db.userList.findAll()
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
  // res.status(200).send("Admin Content.");
};

exports.userRolesBoard = (req, res) => {
  db.userRoles.findAll()
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err
      });
    });
  // res.status(200).send("Moderator Content.");
};
