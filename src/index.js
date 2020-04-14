const local = require('./local');
const crypto = require('./crypto');
const requests = require('./requests');

var _response = null;

// Step ONE - Make a request to the Codenation endpoint to get a sentence..
requests.generateData(generateData_cb);
console.log('Waiting Request..');

return;


/**
 * 
 * @param {*} response 
 */
function generateData_cb(response) {
  _response = response;
  console.log('Response of the Request: ', response);

  // Step TWO - Save data on the disk file.
  local.writeFile(response, writeData_cb);
  console.log('Saving File...'); 

  return;
}

/**
 * 
 */
function writeData_cb() {
  const response = _response;
  console.log('File Saved with Sucess!');

  // Step THREE - Decode received sentence.
  response.decifrado = crypto.decodeSentence(response.cifrado, response.numero_casas);
  console.log('Sentence Decoded: ', response.decifrado);

  // Step FOUR - Encode the Summary to SHA1 Hash.
  response.resumo_criptografico = crypto.getSha1(response.decifrado);
  console.log('Sentence Decoded (sha1): ', response.resumo_criptografico);

  // Step FIVE - Update attributes on the disk file.
  local.writeFile(response, writeSubmit_cb);
  console.log('Updating File...');

  return;
}

/**
 * 
 */
function writeSubmit_cb() {
  console.log('File Updated with Sucess!');

  // Step SIX - Submit json of the challenge.  
  const data = local.getData();
  console.log('File Loaded:', data._boundary);

  requests.submitSolution(data, submitSolution_cb);
  console.log('Challenge Submited!')

  return;
}

/**
 * 
 * @param {*} response 
 */
function submitSolution_cb(response) {
  console.log('Result of the Submit: ', response)
  
  return;
}