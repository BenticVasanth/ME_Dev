var CryptoJS = require("crypto-js");

module.exports = {
  encrypt(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted
  },

  decrypt(encrypted, key) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)
    return decrypted
  },
}
