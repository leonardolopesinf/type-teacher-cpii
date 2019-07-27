# Indicando Tipo com '<>'

Em Typescript, usamos a tipagem com '<>' em momentos em que o tipo de determinada entidade pode ser mais específico do que o tipo atual. Basicamente, é como um tipo convertido em outras linguagens, porém sem a parte de reestruturação de dados.

Exemplo:

    let x: any = "olá";
    let y = (<string>x).substring(0, 3); 
    // a sintaxe é bem simples: basta colocar o tipo selecionado entre '<>'
