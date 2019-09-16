interface Pontuacao {
    pontuacao1: number;
    pontuacao2: number;
}

class MinhaPontuacao implements Pontuacao {  // Classe implementando a interface "Pontuacao"
    pontuacao1: number;
    pontuacao2: number;
}

interface Pessoa {
    nome: string;
}

interface Endereco extends Pessoa {
    endereço: string;
}

// usando a interface que estende outra interface 
var pessoa = <Endereco>{};

pessoa.nome = "Thiago";
pessoa.endereço = "Rua Fernando Castro";

var pontos = new MinhaPontuacao();

pontos.pontuacao1 = 10;
pontos.pontuacao2 = 20;

document.write('Pessoa: ' + JSON.stringify(pessoa) + '<br>'); 
document.write('Pontos: ' + JSON.stringify(pontos) + '<br>'); 