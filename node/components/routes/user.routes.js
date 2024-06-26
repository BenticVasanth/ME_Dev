module.exports = app => {
  const userList = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Users
  router.post("/addUser", userList.create);

  // Retrieve all Users
  router.post("/usersList", userList.findAll);

  // Retrieve a single Users with id
  router.post("/validUser", userList.findOne);

  // Delete a Single User (Logout)
  router.post("/logout", userList.delete);
  
  app.use('/login', router);
};
