//abaixo, criaremos uma função simples para exemplificar
//a tipagem de retorno é feita de maneira simples, apenas usando ':'
function exemplo(x: number, y:number) : number  //aqui, tipamos o retorno como number usando ':'
{
    return x + y;
}

document.write(JSON.stringify(exemplo(7, 5)))

