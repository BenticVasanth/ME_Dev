const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "auth_token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/sabbathDoc",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/userList",
    [authJwt.verifyToken],
    controller.userListBoard
  );

  app.get(
    "/api/userRoles",
    [authJwt.verifyToken],
    controller.userRolesBoard
  );
};
