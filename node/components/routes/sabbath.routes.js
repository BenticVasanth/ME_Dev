module.exports = app => {
  const sabbathDoc = require("../controllers/sabbath.controller.js");

  var router = require("express").Router();

  // Retrieve all Documents
  router.get("/", sabbathDoc.findAll);
  
  app.use('/api/sabbathDoc', router);
};
