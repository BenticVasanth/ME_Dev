module.exports = app => {
  const bibleCommentaryDoc = require("../controllers/bibleCommentary.controller.js");

  var router = require("express").Router();

  // Retrieve all Documents
  router.get("/", bibleCommentaryDoc.findAll);
  
  app.use('/api/bibleCommentaryDoc', router);
};
