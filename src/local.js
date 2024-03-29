const fs = require('fs');
const fd = require('form-data');
const path = require('path');

const _fileFolder = '/data/';
const _fileName = 'answer';
const _fileType = '.json';
const _fileEncoding = 'utf8';
const _fileFullName = path.join(__dirname + _fileFolder, _fileName + _fileType);


module.exports = {
  /**
   * 
   * @param {*} body 
   * @param {*} callback 
   */
  writeFile(body, callback) {
    try {
      fs.writeFile(_fileFullName, JSON.stringify(body), _fileEncoding, callback);
    } catch (error) {
      console.error(error);
    }
    return;
  },

  /**
   * 
   */
  getData() {
    const data = new fd();
    try {
      const stream = fs.createReadStream(_fileFullName)
      data.append(_fileName, stream, _fileName + _fileType);
    } catch (error) {
      console.error(error.message);
    }
    return data;
  }
};