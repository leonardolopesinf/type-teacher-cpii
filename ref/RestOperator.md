# Rest Operator

Todo parâmetro (seja ele padrão ou opcional) possui uma semelhança: se referem a um parâmetro por vez. Às vezes, temos a necessidade de operar com diversos parâmetros (seja como grupos ou por não saber a quantidade de parâmetros de uma determinada Function). Em outras palavras, os Rest Parameters (Parâmetros de Descanso) são capazes de acomodar n número de parâmetros facilmente (Em TypeScript, podemos usá-los denotados por reticências). 

Veja o exemplo abaixo:


    function Nome(primeiroNome: string, ...restoNome: string[]) // restoNome é um Rest Parameter
    {
        return primeiroNome + " " + restoNome.join(" ");
    }

    //exemplificando que o nome utilizado seja "Lucas Silva Gomes Costa"

    var Nome1 = Nome("Lucas", "Silva", Gomes", "Costa");


Os Rest Parameters são utilizados principalmente quando há um número ilimitado de parâmetros opcionais, ou quando esse número pode variar de acordo com determinada circustância. Ou seja: ao passar argumentos para um Rest Parameter, o usuário pode utilizar quantos argumentos quiser (até mesmo nenhum argumento). 


No exemplo abaixo, não passamos um valor para o Rest Parameter. Com isso, o compilador irá retornar apenas "Lucas":


    function Nome(primeiroNome: string, ...restoNome: string[])
    {
    	return primeiroNome + " " + restoNome.join(" ");
    }

    //exemplificando que o nome utilizado seja apenas "Lucas"

    var Nome1 = Nome("Lucas");  //o código opera normalmente


Obs:  Os Rest Parameters de uma determinada Function devem ser colocados por último, caso contrário, o compilador do Typescript emitiria um erro. Veja no exemplo abaixo:


    function Nome(...restoNome: string[], primeiroNome: string) //erro no compilador
    {
    	return primeiroNome + " " + restoNome.join(" ");
    }

    var Nome1 = Nome("Lucas", "Silva", "Gomes");
