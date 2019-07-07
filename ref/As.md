# Palavra-chave "*AS*"
### Quando você trabalha com o TypeScript, a *as*, palavra-chave, está dizendo apenas ao verificador de tipos para fingir que algo tem um tipo diferente. Você pode pensar nas anotações de tipo como uma camada meta separada sobre o código real.
### Ele trabalha como o \<algo\> , como exemplo :
```
var texto: string = '123';

var T = <number> texto; // indica que texto é um number
```
### Com *as* ficaria assim :
```
var texto: string = '123';

var T = texto as number; // indica que texto é um number
```
### A diferença é que (as U) funciona em arquivos TSX, mas <U> entra em conflito com a sintaxe JSX. as foi introduzido por este motivo.Logo "As" é a sintaxe mais recomendada pra essa função.
