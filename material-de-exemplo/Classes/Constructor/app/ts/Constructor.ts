//abaixo, criaremos uma classe para exemplificarmos a sintaxe e o funcionamento de um constructor

class Aluno
{
    private nome: string;
    private idade: number;
    private turma: string;

    constructor(nome: string, idade: number, turma: string) //criamos um constructor com os parâmetros 'nome', 'idade' e 'turma'
    {
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
    }
}

let Aluno1 = new Aluno("Alberto", 16, "DS202");
let Aluno2 = new Aluno("Beatriz", 16, "DS204");
let Aluno3 = new Aluno("Carla", 17, "DS301");
let Aluno4 = new Aluno("Daniel", 18, "DS303");

document.write('Aluno 1 => ' + JSON.stringify(Aluno1) + '<br>');
document.write('Aluno 2 => ' + JSON.stringify(Aluno2) + '<br>');
document.write('Aluno 3 => ' + JSON.stringify(Aluno3) + '<br>');
document.write('Aluno 4 => ' + JSON.stringify(Aluno4) + '<br>');
