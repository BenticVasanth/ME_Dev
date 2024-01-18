module.exports = {
  HOST: "DESKTOP-929MUM0", //SG2NWPLS19SQL-v08.mssql.shr.prod.sin2.secureserver.net
  USER: "Benatic", //'JesusMary'
  PASSWORD: "Benatic@10", //'Elohim_1927',
  DB: "JWT", //'Elshaddai'
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


// module.exports = {
//   HOST: "NIC", //SG2NWPLS19SQL-v08.mssql.shr.prod.sin2.secureserver.net
//   USER: "Ben", //'JesusMary'
//   PASSWORD: "Admin123$", //'Elohim_1927',
//   DB: "ElshaddaiDB", //'Elshaddai'
//   dialect: "mssql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };