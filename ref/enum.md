# Enum
Tipo de dado que não existe no JavaScript puro, mas foi adicionado ao TypeScript por ser um objeto com a chave dos elementos definida de forma mais complacente. O enum (enumeração) é para trabalhar com listas e trabalha com 0. ----> Aprofundar I

```
 enum Color {Purple, Pink, Black}; 

 var a: Color = Color.Pink;

 console.log(a); //Retorna 1 ----> Aprofundar II / Erro III

 ```

Se quiser, também tem a possibilidade de indicar um valor inicial 

```
 enum Color {Purple=1, Pink, Black};

 var a: Color = Color.Pink;

 console.log(a); //Retorna 2 -----> Aprofundar III / Erro III

```

O objeto Color guarda os dados, tanto no indice 2 com o valor igual a Pink, quanto na propriedade Pink com o valor igual a 2

``` 
 enum Color {Purple=1, Pink, Black};

 var number: Color  = Color.Pink;
 
 var name:  string = Color[2] ;  -----> Erro I

 console.log(number);  //vai retornar 2 ----> Erro III

 console.log(name); //vai retornar Pink ----> Erro II / Erro III

 //vai retornar 2 e Pink respectivamente 

 ```
