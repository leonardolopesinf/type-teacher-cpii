# Decorators

Decorators são uma espécie de anotações dentro de nosso código, capazes de alterar o comportamento de determinadas funções, classes ou métodos de maneira mais dinâmica, além de armazenar metadados que irão nos auxiliar com a inspeção de nosso programa. Embora ainda sejam um recurso experimental, conseguem ser extremamente úteis.

### Observação:

Para que possamos utilizar decorators em nosso código, precisamos primeiramente habilitar a opção **'experimentalDecorators'** dentro de nosso **tsconfig.json**:

    {
        "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }

Decorators são declarados atráves de arrobas ('@'), podendo ser anexadas a declaraçõe de classes, métodos ou parâmetros. Por exemplo: se tivermos **@Dec**, Dec se relaciona a uma função que será chamada durante seu tempo de execução.