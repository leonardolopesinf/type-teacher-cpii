class MinhaPontuacao {
}
// usando a interface que estende outra interface 
var pessoa = {};
pessoa.nome = "Thiago";
pessoa.endereço = "Rua Fernando Castro";
var pontos = new MinhaPontuacao();
pontos.pontuacao1 = 10;
pontos.pontuacao2 = 20;
document.write('Pessoa: ' + JSON.stringify(pessoa) + '<br>');
document.write('Pontos: ' + JSON.stringify(pontos) + '<br>');
