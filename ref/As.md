# Palavra-chave "*AS*"
### Quando você trabalha com o TypeScript, a *as*, palavra-chave, está dizendo apenas ao verificador de tipos para fingir que algo tem um tipo diferente. Você pode pensar nas anotações de tipo como uma camada meta separada sobre o código real.
### Ele trabalha como o \<algo\> , como exemplo :
```
var T = <U> createShape("circle"); 
```
### Com *as* ficaria assim :
```
var T = createShape("circle") as U ; 
```
### A diferença é que (as Circle) funciona em arquivos TSX, mas <Circle> entra em conflito com a sintaxe JSX. as foi introduzido por este motivo.Logo "As" é a sintaxe mais recomendada pra essa função.
