const axios = require('axios');

const _token = '';
const _url = 'https://api.codenation.dev/v1/challenge/dev-ps/';

module.exports = {
  /**
   * 
   * @param {*} callback 
   */
  async getFrase(callback) {
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
  async postFrase(data, callback) {
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