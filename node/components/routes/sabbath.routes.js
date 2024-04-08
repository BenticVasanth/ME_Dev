module.exports = app => {
  const sabbathDoc = require("../controllers/sabbath.controller.js");
  const session = require("../../assets/js/common.js");

  var router = require("express").Router();

  // Retrieve all Documents
  router.get("/", sabbathDoc.findAll);
  // router.get("/", session.validSession, sabbathDoc.findAll);
  
  app.use('/api/sabbathDoc', router);
};
