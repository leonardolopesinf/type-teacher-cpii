# strictNullChecks

Habilita verificações nulas rigorosas. No modo de verificação de nulos, os valores null e undefined não estão no domínio de cada tipo e são apenas atribuíveis a eles próprios e a any. Ou seja, não permite que um valor nulo seja atribuido a uma variável a qual não tenha um tipo nulo.

> OBS: Any é a única exceção sendo que undefined também é designável para void.

```
//tsconfig.json

"compilerOptions":{
   "strictNullChecks": true 
}
```

```
//index.ts

var numero: number = 0;

numero = null; //Erro

numero as null //Erro
```
