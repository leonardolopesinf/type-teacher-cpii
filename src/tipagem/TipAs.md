# Indicando Tipo com "As"

Em Typescript, a usabilidade da sintaxe "as" é equivalente ao da sintaxe '<>'. Ambos os casos são usados em casos em que o tipo de um elemento x poderia ser mais preciso (ou específico) do que o tipo atual. 

Exemplo:

    let x: any = "olá";
    let y = (x as string).substring(0, 3);
    // a sintaxe é extremamente parecida com o de '<>', porém usamos "x as string" ao invés de "<string>x"
