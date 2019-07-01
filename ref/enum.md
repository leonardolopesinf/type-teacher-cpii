# Enum
Tipo de dados que não existe no JavaScript mas foi adicionado ao TypeScript por ser um objeto com a chave dos elementos definida de forma mais complacente. O enum (enumeração) é  para trabalhar com listas e trabalha com 0.

```
 enum Color {Purple, Pink, Black}; 

 ar a: Color = Color.Pink;

 Console.log(a); //Retorna 1 

 ```

Se quiser, também tem a possibilidade de indicar um valor inicial

```

 enum Color {Purple=1, Pink, Black};

 var a: Color = Color.Pink;

Console.log(a); //Retorna 2 

```


O objeto Color guarda os dados, tanto com indice 2 e valor Pink, quanto indice Pink e valor 2

``` 

enum Color {Purple=1, Pink, Black};


 var number: Color  = Color.pink;
 
 var name:  string = Color[2] ;

 Console.log(number);  //vai retornar 2

 Console.log(name); //vai retornar Pink

 //vai retornar 2 e Pink respectivamente 

 ```
