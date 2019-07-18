// Uma função é utilizada através da palavra-chave 'function', seguida do nome atribuido a ela

function soma(a: number, b: number) //Aqui, criamos uma função com nome "soma", com os atributos 'a' e 'b', ambos tipados como number
{
    var resultado: number = a+b
    return resultado
}

var c: number = soma(18, 12) //Criamos também uma variável 'c', que atribuímos os valores 18 e 12
document.write(JSON.stringify(c));