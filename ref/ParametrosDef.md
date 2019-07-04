# Parâmetros Default (Padrão)

Dentro do Typescript, podemos atribuir um valor dentro de um parâmetro (caso o usuário não forneça um ou caso o usuário o utilize como 'undefined'). Estes são chamados de Parâmetros Default, que são parâmetros utilizados por padrão. Usando o mesmo exemplo usado no tópico 'Parâmetros Opcionais', iremos padronizar o sobrenome para "Silva".


    function Nome(primeiroNome: string, ultimoNome = "Silva")
    { 
        return primeiroNome + " " + ultimoNome;
    }

    var r1 = Nome("Lucas");   //o código opera normalmente, e Nome irá retornar como "Lucas Silva".
    var r2 = Nome("Lucas", undefined);   //o código ainda funciona, e Nome também ira retornar como "Lucas Silva".
    var r3 = Nome("Lucas", "Silva", "Gomes");   //erro no código, já que a quantidade de valores atribuídos excede os de parâmetros.
    var r4 = Nome("Lucas", "Marques");   //o código opera normalmente


Os parâmetros utilizados por padrão (que são postos depois de todos os parâmetros "essenciais") são considerados opcionais e, consequentemente, podem ser omitidos em suas Functions.

Ao contrário dos parâmetros opcionais, os parâmetros inicializados por padrão não precisam ser atribuídos após os parâmetros "essenciais". Caso os parâmetros default sejam postos antes de um parâmetro essencial, o usuário precisaria necessariamente atribuí-lo como 'undefined' para que o valor inicializado padrão seja aplicado. Por exemplo:


    function Nome(primeiroNome = "Lucas", restoNome: string)
    {
    	return primeiroNome + " " + restoNome;
    }

    var Nome1 = Nome("Carlos") //erro, pois 'restoNome' não recebeu valor
    var Nome2 = Nome("Carlos", "Silva", "Gomes") //erro, pois a quantidade de valores atribuídos excede os de parâmetros
    var Nome3 = Nome("Carlos", "Silva") //o código opera normalmente, Nome3 retorna como "Carlos Silva"
    var Nome4 = Nome(undefined, "Silva") //o código opera normalmente, Nome4 retorna como "Lucas Silva"
