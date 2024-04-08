const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '+05:30', // for writing to database
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userModal = require("./user.model.js")(sequelize, Sequelize);
db.sabbathModal = require("./sabbath.model.js")(sequelize, Sequelize);

module.exports = db;
