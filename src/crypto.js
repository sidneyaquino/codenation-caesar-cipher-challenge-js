const crypto = require('crypto');

/**
 * 
 * @param {*} sentence 
 * @param {*} type 
 */
const getHash = (sentence, type) => crypto
  .createHash(type)
  .update(sentence)
  .digest('hex');

module.exports = {
  /**
   * 
   * @param {*} sentence 
   */
  getSha1(sentence) {
    return getHash(sentence, 'sha1');
  },

  /**
   * 
   * @param {*} sentence 
   * @param {*} number 
   */
  decodeSentence(sentence, number) {
    const letters = 26;

    number = number < 0 ? letters : number % letters;
    if (number == 0) {  // No changes.
      output = sentence;
    } else {            // Decode.
      var output = '';
      for (var current = 0; current < sentence.length; current++) {
        var code = sentence[current].charCodeAt();

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