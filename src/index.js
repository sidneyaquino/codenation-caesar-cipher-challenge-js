const local = require('./local');
const crypto = require('./crypto');
const requests = require('./requests');

// 1a Etapa - Fazer requisição ao endpoint da CODENATION para pegar a frase.
requests.getFrase(getFrase_cb);
console.log('Aguardando consulta...');
return;


/**
 * 
 * @param {*} response 
 */
function getFrase_cb(response) {
  console.log('Resposta da Consulta : ', response);

  // 2a Etapa - Descodificar frase recebida.
  response.decifrado = crypto.decodeFrase(response.cifrado, response.numero_casas);
  console.log('Frase Decifrada: ', response.decifrado);

  // 3a Etapa - Codificar o Resumo (SHA1).
  response.resumo_criptografico = crypto.getSha1(response.decifrado);
  console.log('Frase Decifrada (sha1): ', response.resumo_criptografico);

  // 4a Etapa - Atualizar o arquivo em disco com os campos novos.
  local.saveFile(JSON.stringify(response), saveFile_cb);
  console.log('Arquivo sendo atualizado...');

  return;
}

/**
 * 
 */
function saveFile_cb() {
  console.log('Arquivo atualizado com êxito!');

  // 5a Etapa - Submeter json do challenger.  
  const data = local.getData();
  console.log('Arquivo carregado:', data._boundary);

  requests.postFrase(data, postFrase_cb);
  console.log('Desafio submetido!')

  return;
}

/**
 * 
 * @param {*} response 
 */
function postFrase_cb(response) {
  console.log('Resultado da Submissão: ', response)
  
  return;
}