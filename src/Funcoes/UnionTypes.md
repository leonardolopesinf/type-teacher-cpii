# Union Types


## Conceito 

Os Union Types (ou Tipos de União) estão extremamente ligados aos Intersection Types, porém seu uso é bem diferente. Um Union Type descreve um determinado valor que pode pertencer a vários tipos. É usada uma barra vertical ('|') para separar cada tipo, isso é, supondo que tenhamos um parâmetro **number | string | boolean**, consequentemente o valor atribuído a este parâmetro poderá ser um **number, uma string ou booleano**.

## Exemplo:

    function Aluno(nome: string, matricula: string | number)
    {
        //restante do código...
    }

No exemplo acima, o parâmetro _matricula_ pode receber um valor que seja uma **string** ou **booleano**.

### Observação: 

Union Types podem ser um pouco confusos ou complicados, portanto é necessário atenção. Se um determinado parâmetro possui valor dos tipo **A | B**, só temos total certeza de que esse valor possui características que _A e B possuem em comum_. Por exemplo:

    interface Cachorro 
    {
        correr();
        latir();
    }

    interface Gato
    {
        correr();
        miar();
    }

    function getAnimal(): Cachorro | Gato
    {
        //restante do código...
    }

    let animal1 = getAnimal();
    animal1.correr(); //o código opera normalmente
    animal1.latir(); //erro no código

No exemplo acima, só podemos ter total certezade que o animal, independente de Cachorro ou Gato, possuirá _correr_, já que _correr_ é um método que tanto Cachorro quanto Gato possuem em comum.