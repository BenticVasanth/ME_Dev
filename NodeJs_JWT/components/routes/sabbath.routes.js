const { authJwt } = require("../middleware");
const sabbathController = require("../controllers/sabbath.controller");
const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fieldSize: 25 * 1024 * 1024, // 25MB
  },
});

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "auth_token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Retrieve all Sabbath Doc
  app.get("/api/sabbathDoc", [authJwt.verifyToken], sabbathController.findAll);
  app.post("/api/sabbathDocUpload", upload.array("files"), [authJwt.verifyToken], sabbathController.sabbathDocUpload);
};
