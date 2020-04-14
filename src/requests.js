const axios = require('axios');

const _token = '';
const _url = 'https://api.codenation.dev/v1/challenge/dev-ps/';


module.exports = {
  /**
   * 
   * @param {*} callback 
   */
  async generateData(callback) {
    const resource = 'generate-data';
    const options = {
      params: { token: _token }
    };
    await axios.get(_url + resource, options)
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
  async submitSolution(data, callback) {
    const resource = 'submit-solution';
    const options = {
      params: { token: _token },
      headers: data.getHeaders()
    };
    await axios.post(_url + resource, data, options)
      .then(response => response.data)
      .then(result => callback(result))
      .catch(error => console.error(error))
      
    return;
  }
};