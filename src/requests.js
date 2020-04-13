const axios = require('axios');

const _token = 'c9c99aaac6933c7a5c3ecfdb62847866f46ac094';
const _url = 'https://api.codenation.dev/v1/challenge/dev-ps/';

module.exports = {
  /**
   * 
   * @param {*} callback 
   */
  async getSentence(callback) {
    const requestOptions = {
      params: { token: _token }
    };
    await axios.get(_url + 'generate-data', requestOptions)
      .then(response => response.data)
      .then(result => callback(result))
      .catch(error => console.error(error));

    return;
  },

  /**
   * 
   * @param {*} data
   * @param {*} callback
   */
  async postSentence(data, callback) {
    const requestOptions = {
      params: { token: _token },
      headers: data.getHeaders()
    };
    await axios.post(_url + 'submit-solution', data, requestOptions)
      .then(response => response.data)
      .then(result => callback(result))
      .catch(error => console.error(error))
      
    return;
  }
};