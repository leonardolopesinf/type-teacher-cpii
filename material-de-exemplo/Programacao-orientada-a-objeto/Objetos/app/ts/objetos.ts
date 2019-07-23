// para declarar um objeto, basta atribuirmos a ele um tipo (var ou let) e em seguida seu nome:

var objeto = //objeto do tipo var com nome 'Objeto' 
{
    Propriedade_1: "valor_1", //'valor_1' pode ser um number, uma string, etc.
    Propriedade_2: "valor_2",
    
    //resto do código...

    Propriedade_N: "Valor_N",
    Propriedade_Exemplo: "17"
}

document.write(JSON.stringify(objeto))