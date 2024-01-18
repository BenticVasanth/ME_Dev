const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "auth_token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/login/signup",
    // [
    //   verifySignUp.checkDuplicateUsernameOrEmail
    // ],
    controller.signup
  );

  app.post("/login/signin", controller.signin);
};
