## Tuple

Os tipos de tupla expressam uma matriz na qual o tipo de determinados elementos é conhecido

```
[ type1,type2, type3, type4 ]
```

Basicamente é uma estrutura de dados simples semelhante ao array, usado quando há necessidade de armazenar valores com diferentes tipos. No tuple, o array é usado com um comprimento fixo. Você pode impor tipos de índices, enumerando-os dentro de colchetes. Como exemplo, você pode representar um valor de uma string e de um number:

```
let a: [string, number]; 
a = ["Olá", 20];
```


OBS: Se você redefinir a variável **a** e inverter os valores, de modo que não fique correspondente ao que foi declarado na variável, irá dar erro.

```
let a: [string, number]; 
a = ["Olá", 20]; // correct
a = [20, “Olá”]; // incorrect 
```

Caso você queira inicializar a tupla mais tarde, você pode declarar uma variável vazia.

```
var a = []; 
a[0] = 120; 
a[1] = 234;
```
