const crypto = require('crypto');

/**
 * 
 * @param {*} frase 
 * @param {*} type 
 */
// function getHash(frase, type) {
const getHash = (frase, type) => {
  return crypto
    .createHash(type)
    .update(frase)
    .digest('hex');
}

module.exports = {
  /**
   * 
   * @param {*} frase 
   */
  getSha1(frase) {
    return getHash(frase, 'sha1');
  },

  /**
   * 
   * @param {*} frase 
   * @param {*} number 
   */
  decodeFrase(frase, number) {
    const letters = 26;

    number = number < 0 ? letters : number % letters;
    if (number == 0) {  // No changes.
      output = frase;
    } else {            // Decode.
      var output = '';
      for (var current = 0; current < frase.length; current++) {
        var code = frase[current].charCodeAt();

        if (code >= 65 && code <= 090) {  // Capital letters.
          code += 32;
        }
        if (code >= 97 && code <= 122) {  // Small letters.
          code -= number;
          code = code < 97 ? 122 - (97 - code - 1) : code;
        }
        output += String.fromCharCode(code);
      }
    }
    return output;
  }
}