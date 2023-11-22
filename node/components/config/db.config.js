module.exports = {
  HOST: "NIC",
  USER: "Ben",
  PASSWORD: "Admin123$",
  DB: "ElshaddaiDB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
