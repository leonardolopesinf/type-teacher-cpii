# Conditional Types

Os tipos condicionais permitem transformações de tipos que diferem dependendo de uma condição.

Ex:
```

T extends U ? X : Y 

```
Isto, na linguagem humana, é: Se o tipo T é atribuível ao tipo U , selecione o tipo X ;

 caso contrário, selecione o tipo Y.

# Tipos condicionais predefinidos 

Foram adicionados pelo TypeScript 2.8

+ Exclude<T, U> - Exclui de T os tipos que podem ser designados para U 
+ Extract<T, U> - Extraia de T os tipos designáveis ​​para U 
+ NonNullable<T> - NonNullable<T> null e undefined de T 
+ ReturnType<T> - Obtém o tipo de retorno de um tipo de função. 
+ InstanceType<T> - Obtém o tipo de instância de um tipo de função de construtor. 
