const db = require("../../components/models");
const aesUtil = require("./aesUtil");
const Session = db.SessionDetails;
const sequelize = require("sequelize");

module.exports = {
    async validSession(req, res, next) {
        let sessionExists = await Session.findOne({ where: { SessionId: req.get('ses_token') } })
        if (sessionExists === null) {
            let sessionNotExists = {
                id: "0",
                stringValue: "Session not Exists"
            }
            return res.status(403).json(aesUtil.testEncrypt(JSON.stringify(sessionNotExists), global.auth_token));
        } else {
            let sql = `SELECT UpdatedDateTime FROM SessionDetails WHERE SessionId = $SessionId;`;
            await db.sequelize.query(sql, {
                bind: {
                    SessionId: req.get('ses_token')
                },
            }, { type: sequelize.QueryTypes.SELECT }).then(data => {
                let nowCurrentDateTime = new Date();
                let lastUpdatedDateTime = data[0][0].UpdatedDateTime;
                let userSessionTime = Math.abs(nowCurrentDateTime - lastUpdatedDateTime)
                console.log(userSessionTime);
                console.log(userSessionTime > global.totalSessionTime);
                if (userSessionTime > global.totalSessionTime) {
                    // let sessionExpired = {
                    //     id: "0",
                    //     stringValue: "Session is Invalid"
                    // }
                    return res.status(440).json(aesUtil.testEncrypt("Session is Invalid", global.auth_token));
                } else {
                    let currentDateTime = new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(12, 23);
                    let sessionToken = req.get('ses_token');
                    const sql1 = `UPDATE SessionDetails SET updatedDateTime = '${currentDateTime}' WHERE SessionId = '${sessionToken}';`
                    db.sequelize.query(sql1, { type: sequelize.QueryTypes.UPDATE }).then(() => {
                        next();
                    }).catch(err => {
                        let sessionNotUpdate = {
                            id: "0",
                            stringValue: "Session not Update" + err
                        }
                        return res.status(403).json(aesUtil.testEncrypt(JSON.stringify(sessionNotUpdate), global.auth_token));
                    })
                }
            }).catch(err => {
                return res.status(500).send({
                    message: err.message || "Some error occurred while creating the Users."
                });
            });
        }
    }
}