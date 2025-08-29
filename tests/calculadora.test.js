//importar a função do calculadora.js
// cria a caixa com o mesmo nome da calculadora.js
// require = importar
//../ significa sair da pasta teste, e entra na SRC / calculadora.js para poder fazer o teste 
const { somarDoisNumeros } = require('../src/calculadora');

const resultadoDaSoma = somarDoisNumeros(5,3);

//console.log mostra o resultado no terminal abaixo
console.log(resultadoDaSoma);