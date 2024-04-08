var CryptoJS = require("crypto-js");

module.exports = {
  testEncrypt(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted
  },

  testDecrypt(encrypted, key) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)
    return decrypted
  },
}
