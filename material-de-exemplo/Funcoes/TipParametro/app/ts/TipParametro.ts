// abaixo, criaremos uma função para exemplificar a tipagem de parâmetros:

function ex(x: number, y: number) //criamos dois parâmetros: 'x e 'y', ambos foram tipados como number.
{
    var soma: number = x + y;
    return soma
}

let ex1 = ex(7, 8 ) //criamos um objeto chamado "ex1" que recebeu os valores 7 e 8

document.write(JSON.stringify(ex1));