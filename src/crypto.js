const crypto = require('crypto');


/**
 * 
 * @param {*} text 
 * @param {*} type 
 */
const getHash = (text, type) => crypto
  .createHash(type)
  .update(text)
  .digest('hex');

module.exports = {
  /**
   * 
   * @param {*} text 
   */
  getSha1(text) {
    return getHash(text, 'sha1');
  },

  /**
   * 
   * @param {*} text 
   * @param {*} number 
   */
  decodeSentence(text, number) {
    const letters = 26; // Amount of the letters in the alphabet.

    number = number < 0 ? letters : number % letters;
    if (number == 0) {  // No changes.
      output = text;
    } else {            // Decode.
      var output = '';
      for (var current = 0; current < text.length; current++) {
        var code = text[current].charCodeAt();

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
};