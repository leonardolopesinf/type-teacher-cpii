# Intersection Types

Uma Intersection Type é capaz de agrupar diversos tipos em um. Isso faz com que o usuário possa adicionar vários tipos existentes a fim de criar um único tipo que possua todas as características necessárias.

Por exemplo:  


    type A = { a: number};
    type B = { b: boolean };
    type C = { c: string };

    function method(value: A & B & C)
    {
          // restante do código
    }

    method({ a: 1 }); // Erro, pois só A recebeu um valor
    method({ a: 1, b: true }); // Erro, pois apenas A e B receberam um valor
    method({ a: 1, b: true, c: 'Quatro' }); // O código opera normalmente, pois A, B e C receberam valor


Uma Intersection Type pode ser usada com '&' ('E Comercial' ou Ampersand, chame do que quiser). Observe o exemplo:


    t1 & t2 & t3 & ... & tN


Obs: Cada componente de uma determinada Intersection Type pode ser qualquer tipo, incluindo outra Intersection Type. Por exemplo:


    type A = Type1 & Type2;
    type B = Type3 & Type4;

    type C = A & B;


### Intersecções de Tipos de Objetos
 
Ao criarmos uma interseção de tipos de objetos, ela mescla todas as características (propriedades) simultaneamente. Por exemplo, se criarmos uma interseção de dois objetos de diferentes conjuntos de propriedade, o resultado seria um objeto que mescla todas as propriedades dos dois objetos implementados.


    type A = { x: number };
    type B = { y: boolean};

    type C = A & B;

    var value: C = 
    {
        x: 1,
        y: true
    };
