# Declaração de Types

TypeScript suporta todos os tipos básicos de dados que o JavaScript. Além disso, suporta também  tipagem da variável, forçando que ela aceite apenas o especificado.

Regra:

```
let nomeDaVariavel: tipo = valor

```

## Pode declarar como:

###Boolean

True ou False. Comum nas linguagens de programação.

```
let x: boolean = false;
```

### Number

Todos os números são pontos flutuantes (float). TypeScript também suporta literais binários e octal

```
let age:number = 16;
```

```
let hex: number = 0xf00d;
```

```
let binary: number = 0b1010;
``` 

```
let octal: number = 0o744;
```



### String

Valores do tipo texto, com aspas duplas ou simples.

```
let name: string = "Jorge"
```

ou

```
let name: string = 'Jorge'
```

### Any

Com o tipo "any", sua variavel vai aceitar qualquer coisa.

```
var maybe: any = 5;
maybe = "Talvez string";
maybe = false; // boolean
```

### Void

Oposto do tipo "Any". Não especifica nenhum tipo de dado, então não retorna a nada.

```
function warnUser(): void {
    alert("This is my warning message");
}
```

### Never

Funções que nunca retornam valor algum ou variáveis que nunca são verdadeiras.

> O tipo never é um subtipo de todo tipo; no entanto, nenhum tipo é um subtipo de never.

```
function do(): never {
    while (true) {}
}
// você tem um loop infinito sem nenhum retorno.

```

### Tuple

Os tipos de tupla expressam uma matriz na qual o tipo de determinados elementos é conhecido

```
[ type1,type2, type3, type4 ]
```

Basicamente é uma estrutura de dados simples semelhante ao array, usado quando há necessidade de armazenar valores com diferentes tipos. No tuple, o array é usado com um comprimento fixo. Você pode impor tipos de índices, enumerando-os dentro de colchetes. Como exemplo, você pode representar um valor de uma string e de um number:

```
let a: [string, number]; 
a = ["Olá", 20];
```

### Enum

Tipo de dado que não existe no JavaScript puro, mas foi adicionado ao TypeScript por ser um objeto com a chave dos elementos definida de forma mais complacente. O enum (enumeração) é para trabalhar com listas.

Os enums numéricos são auto increment. Por padrão, o valor 0 é atribuido ao primeiro registro e incremental para os próximos. 

```
enum Color{
Purple,//[0]
Pink,//[1]
Black//[2]
}
var cor= Color[1]; // pink

```




