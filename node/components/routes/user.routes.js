module.exports = app => {
  const userList = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Retrieve all Users
  // router.get("userList", userList.findAll);

  router.post("/", userList.findAll);

  // Retrieve a single Tutorial with id
  router.post("/validUser", userList.findOne);
  
  app.use('/login/userList', router);
};
