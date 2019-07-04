# Parâmetros Opcionais

No Type, cada parâmetro é solicitado pela Function. Com isso, o compilador verificará se o usuário forneceu um valor para cada parâmetro implementado (o compilador também assume que esses parâmetros são os únicos repassados para a Function. Ou seja, o número de 'argumentos' atribuídos a uma Function deve ser correspondente ao número de parâmetros que a Function espera.

Em Javascript (e consequentemente em Typescript) todos os parâmetros são opcionais e os usuários poderão criá-los como quiserem. Essa funcionalidade pode ser utilizada adicionando '?' no final dos parâmetros que o usuário desejar que sejam opcionais. 

Por exemplo, consideremos que um parâmetro de sobrenome seja opcional:

    function Nome(primeiroNome: string, ultimonome?: string)
    {
        if (ultimoNome)
            return primeiroNome + " " + ultimoNome;
        else
            return primeiroNome;
    }

    var r1 = Nome("Lucas"); //o código opera normalmente
    var r2 = Nome("Lucas", "Silva", "Gomes"); //Erro no código, já que a quantidade de valores atribuídos excede os de parâmetros
    var r3 = Nome("Lucas", "Silva");   //o código continuaria operando normalmente, já que 'ultimoNome' é um parâmetro opcional

Obs: Todo parâmetro opcional deve seguir os parâmetros utilizados. Ou seja, se quiséssemos usar o primeiro nome como opcional, a ordem dos parâmetros dentro da Function também precisar ser modificada (colocar primeiramente o último nome e da seguir o primeiro nome).


    function Nome(primeiroNome?: string, ultimoNome: string) //erro no código
    function Nome(ultimoNome: string, primeiroNome?: string) //o código opera normalmente
