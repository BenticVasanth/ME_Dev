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
            let currentDateTime = new Date().toISOString().slice(0, 10) + ' ' + new Date().toISOString().slice(12, 23);
            let sessionToken = req.get('ses_token');
            const sql = `UPDATE SessionDetails SET updatedDateTime = '${currentDateTime}' WHERE SessionId = '${sessionToken}';`
            await db.sequelize.query(sql, { type: sequelize.QueryTypes.UPDATE }).then(() => {
                next();
            }).catch(err => {
                let sessionNotUpdate = {
                    id: "0",
                    stringValue: "Session not Update" + err
                }
                return res.status(403).json(aesUtil.testEncrypt(JSON.stringify(sessionNotUpdate), global.auth_token));
            })
        }
    }
}