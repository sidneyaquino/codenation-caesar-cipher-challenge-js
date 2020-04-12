const fs = require('fs');
const fd = require('form-data');
const path = require('path');

const _fileData = '/data/';
const _fileName = 'answer';
const _fileType = '.json';
const _fileEncoding = 'utf8';
const _fileFullName = path.join(__dirname + _fileData, _fileName + _fileType);

module.exports = {
  /**
   * 
   * @param {*} body 
   * @param {*} callback 
   */
  saveFile(body, callback) {
    try {
      fs.writeFile(_fileFullName, body, _fileEncoding, callback);
    } catch (error) {
      console.error(error);
    }
    return;
  },

  /**
   * 
   */
  getData() {
    const output = new fd();
    try {
      const stream = fs.createReadStream(_fileFullName)
      output.append(_fileName, stream, _fileName + _fileType);
    } catch (error) {
      console.error(error.message);
    }
    return output;
  }
};