const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.userModal;

verifyToken = (req, res, next) => {
  console.log('verifyToken');

  let oldToken = req.headers.auth_token;
  if (!oldToken) {
    return res.status(403).send("No token provided!");
  }

  let sessionTime = verifySessionTime(oldToken);

  if (sessionTime) {
    res.status(403).send('Session expired');
  } else {
    jwt.verify(oldToken,
      config.secret,
      (err, decoded) => {
        if (err) {
          return res.status(401).send("Unauthorized!");
        }
        console.log(decoded);
        let newToken = setToken(decoded.id);
        verifySessionTime(newToken);
        req.userId = decoded.id;
        next();
      });
  }
};

function verifySessionTime(token) {
  console.log(token);
  global.auth_token = token;
  const payloadBase64 = token.split('.')[1];
  const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
  const decodedTime = JSON.parse(decodedJson)
  const exp = decodedTime.exp;
  const iat = decodedTime.iat;
  const expired = (Date.now() >= exp * 1000)

  global.sessionExpTime = exp;

  console.log('-----------');
  console.log('verifyToken Start');
  console.log('-----------');

  console.log("Date.now() :" + Date.now());
  console.log("iat :" + iat * 1000);
  console.log("exp :" + exp * 1000);
  console.log("expired :" + expired);

  console.log('-----------');
  console.log('verifyToken End');
  console.log('-----------');

  return expired
}

function setToken(id) {
  const token = jwt.sign({ id: id },
    config.secret,
    {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: 60, //Sec
    });

  global.auth_token = token;
  return token;
}

const authJwt = {
  verifyToken: verifyToken,
  verifySessionTime: verifySessionTime,
  setToken: setToken
};
module.exports = authJwt;
