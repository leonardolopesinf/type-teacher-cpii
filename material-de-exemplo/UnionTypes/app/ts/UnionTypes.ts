function Aluno(nome: string, matricula: string | number) //foi criado o parâmetro Matricula, que pode receber valores string ou number
{
    // restante do código...   
}

let Aluno1 = Aluno("Alberto", "abcde") //o código opera normalmente, pois matricula recebe um valor string
let Aluno2 = Aluno("Rodrigo", 12345) //o código continua operando normalmente, pois matricula recebe um valor numérico