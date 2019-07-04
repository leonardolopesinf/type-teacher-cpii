# Generic types
### O TypeScript inclui o conceito de tipos genéricos, que pode ser interpretado como um tipo que deve incluir ou fazer referência a outro tipo para ser concluído
### Existem 2 tipos mais comuns que são:
+ Array
+ Promisse
### A sintaxe de um tipo genérico é:
```
GenericType
```
### Ao contrário dos tipos de objetos não genéricos, os tipos genéricos só podem ser criados com interfaces ou classes.
### Na versão 2.3, o Typescript adicionou a capacidade de declarar um tipo padrão para tipos genéricos. Isso é muito útil para funções em que o tipo de retorno depende de um parâmetro, mas você deseja que o parâmetro seja opcional. Por exemplo, se quiséssemos uma função que criasse uma Arrayish baseada nos argumentos passados mas com padrão para string quando nenhum argumento fosse passado, antes de 2.3 teríamos que escrever:
```
function createArrayish(): Arrayish<string>;
function createArrayish<T>(...args: T[]): Arrayish<T>;
function createArrayish(...args: any[]): Arrayish<any> {
    return args;
}
```
### Depois da versão 2.3
```
function createArrayish<T = string>(...args: T[]): Arrayish<T> {
    return args;
}

```
