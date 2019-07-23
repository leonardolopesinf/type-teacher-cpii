# strictNullChecks

Habilita verificações nulas rigorosas. No modo de verificação de nulos, os valores null e undefined não estão no domínio de cada tipo e são apenas atribuíveis a eles próprios e a any.

> OBS: Any é a única exceção sendo que undefined também é designável para void.

```
"compilerOptions":{
   "strictNullChecks": true 
}
```
