function Aluno(nome, matricula) {
    return { nome: nome, matricula: matricula };
}
let Aluno1 = Aluno("Alberto", "abcde"); //o código opera normalmente, pois matricula recebe um valor string
let Aluno2 = Aluno("Rodrigo", 12345); //o código continua operando normalmente, pois matricula recebe um valor numérico
document.write('Aluno1 => nome: ' + Aluno1.nome + ' matricula: ' + Aluno1.matricula + ' (' + typeof (Aluno1.matricula) + ')' + '<br>');
document.write('Aluno2 => nome: ' + Aluno2.nome + ' matricula: ' + Aluno2.matricula + ' (' + typeof (Aluno2.matricula) + ')');
