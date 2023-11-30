module.exports = app => {
  const bibleCommentaryDoc = require("../controllers/bibleCommentary.controller.js");
  const session = require("../../assets/js/common.js");

  var router = require("express").Router();

  // Retrieve all Documents
  router.get("/", session.validSession, bibleCommentaryDoc.findAll);
  
  app.use('/api/bibleCommentaryDoc', router);
};
