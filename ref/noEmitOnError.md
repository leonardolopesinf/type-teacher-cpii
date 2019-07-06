# noEmitOnError

É um opção do compilador do tipo boolean. Não emita saídas se algum erro for relatado. Isso é útil devido ao tsc que, por padrão, gravará seus arquivos de saída mesmo se forem encontrados erros de compilação.

```

    "compilerOptions":{
        "noEmitOnError": true // não gera output em caso de erros
    }

```
