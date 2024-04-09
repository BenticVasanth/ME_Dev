const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");

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

  // Create a new Users
  // app.post("/login/addUser", userController.create);

  // Retrieve all Users
  app.get("/api/userList", [authJwt.verifyToken], userController.findAll);

  // Retrieve a single Users with id
  // app.post("/api/validUser", [authJwt.verifyToken], userController.findOne);

  // // Delete a Single User (Logout)
  // app.post("/api/logout", [authJwt.verifyToken], userController.delete);
};
