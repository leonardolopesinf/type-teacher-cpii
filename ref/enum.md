# Enum
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


O objeto Color guarda os dados, tanto no indice 1 com o valor igual a Pink, quanto na propriedade Pink com o valor igual a 1

 ```
enum Color{
Purple,
Pink,
Black
}
var cor:any = Color[1]; // pink
var corNumero = Color[cor]; // 1
var corString= Color["Pink"];//1

 ```
