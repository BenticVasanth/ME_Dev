var CryptoJS = require("crypto-js");

let iterationCount = 100;
let keySize = 128 / 32;
export default {
  methods: {
    encrypt(passPhrase, plainText) {

      var iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
      var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });

      return btoa(salt + '##' + iv + '##' + encrypted.ciphertext.toString(CryptoJS.enc.Base64));
    },

    commonEncrypt(passPhrase, plainText) {
      var iv = "2f99055bcd81c869a3fa86453365c5b3";
      var salt = "92bd2f379f0846f83b8de8d767b2bf3d";

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
      return btoa(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
    },

    testEncrypt(data, key){
      const encrypted = CryptoJS.AES.encrypt(data, key).toString();
      return encrypted
    },

    testDecrypt(encrypted, key){
      const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)
      return decrypted
    },

    decrypt(passPhrase, cipherText) {

      var iv = "2f99055bcd81c869a3fa86453365c5b3";
      var salt = "92bd2f379f0846f83b8de8d767b2bf3d";

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(cipherText)
      });
      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
      return btoa(decrypted.toString(CryptoJS.enc.Utf8));
    },
    decryptEncodeURIComponent(passPhrase, cipherText) {

      var iv = "2f99055bcd81c869a3fa86453365c5b3";
      var salt = "92bd2f379f0846f83b8de8d767b2bf3d";

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(cipherText)
      });
      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
      return btoa(unescape(encodeURIComponent(decrypted.toString(CryptoJS.enc.Utf8))));
    },
    sessionEncrypt(passPhrase, plainText) {

      var iv = "2d1d7bf2d1fda447cb0e61c931adb1d9";
      var salt = "3cfc7b494c3aa26bcec8f2aec54a3e8d";

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });

      return btoa(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
    },
    sessionDecrypt(passPhrase, cipherText) {

      var iv = "2d1d7bf2d1fda447cb0e61c931adb1d9";
      var salt = "3cfc7b494c3aa26bcec8f2aec54a3e8d";

      var key = CryptoJS.PBKDF2(
        passPhrase,
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var cipherParams = cipherText;
      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
      return decrypted.toString(CryptoJS.enc.Utf8);
    },
    shahs(passPhrase, plainText) {
      var iv = "2d1d7bf2d1fda447cb0e61c931adb1d9";
      var salt = "3cfc7b494c3aa26bcec8f2aec54a3e8d";

      var key = CryptoJS.PBKDF2(
        passPhrase.toString(),
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });

      return btoa(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
    },
    deshahs(passPhrase, cipherText) {
      var iv = "2d1d7bf2d1fda447cb0e61c931adb1d9";
      var salt = "3cfc7b494c3aa26bcec8f2aec54a3e8d";

      var key = CryptoJS.PBKDF2(
        passPhrase.toString(),
        CryptoJS.enc.Hex.parse(salt),
        { keySize: keySize, iterations: iterationCount });
      var cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(atob(cipherText))
      });
      var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
      return decrypted.toString(CryptoJS.enc.Utf8);
    },
    bidHash(fileVal) {
      return CryptoJS.SHA256(fileVal);
    }
  }
}
