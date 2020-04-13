const local = require('./local');
const crypto = require('./crypto');
const requests = require('./requests');

// Step ONE - Make a request to the Codenation endpoint to get a sentence..
requests.getSentence(getSentence_cb);
console.log('Waiting Query..');
return;


/**
 * 
 * @param {*} response 
 */
function getSentence_cb(response) {
  console.log('Response of the Query : ', response);

  // Step Two - Decode received sentence.
  response.decifrado = crypto.decodeSentence(response.cifrado, response.numero_casas);
  console.log('Sentence Decoded: ', response.decifrado);

  // Step Three - Encode the Summary to SHA1 Hash.
  response.resumo_criptografico = crypto.getSha1(response.decifrado);
  console.log('Sentence Decoded (sha1): ', response.resumo_criptografico);

  // Step Four - Update attributes on the disk file.
  local.saveFile(JSON.stringify(response), saveFile_cb);
  console.log('Updating File...');

  return;
}

/**
 * 
 */
function saveFile_cb() {
  console.log('File Updated with Sucess!');

  // Step Five - Submit json of the challenge.  
  const data = local.getData();
  console.log('File Loaded:', data._boundary);

  requests.postSentence(data, postSentence_cb);
  console.log('Challenge Submited!')

  return;
}

/**
 * 
 * @param {*} response 
 */
function postSentence_cb(response) {
  console.log('Result of the Submit: ', response)
  
  return;
}