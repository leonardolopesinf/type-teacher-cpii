# removeComments

Do tipo boolean. Não emite comentários para saída. Removendo todos os comentários nos códigos TypeScript.

```
//tsconfig.json

"compilerOptions":{
        "removeComments": true 
    }
```

```
//index.ts

var x: number = 2;

//Este comentário não irá aparecer no código traduzido para JavaScript

```