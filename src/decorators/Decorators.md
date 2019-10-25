# Decorators

Decorators são uma espécie de anotações dentro de nosso código, um tipo especial de declaração que podem ser anexadas a uma declaração de função, classe, método ou parâmetros, assim sendo capazes de alterar o comportamento de determinadas funções, classes ou métodos de maneira mais dinâmica, além de armazenar dados que irão nos auxiliar com a inspeção e manutenção de nosso programa. Embora ainda sejam um recurso experimental, conseguem ser extremamente úteis.

Decorators são declarados atráves de arrobas ('@'), podendo ser anexadas a declarações de classes, métodos ou parâmetros. Por exemplo: se tivermos **@Dec**, Dec se relaciona a uma função que será chamada durante seu tempo de execução.

Exemplo:

    function ABC(target)
    {
        //código restante
    }

### Observação:

Para que possamos utilizar decorators em nosso código, precisamos primeiramente habilitar a opção **'experimentalDecorators'** dentro de nosso **tsconfig.json**:

    {
        "compilerOptions": {
            "target": "ES5",
            "experimentalDecorators": true
        }
    }    



Dentro de Typescript, existem diversos tipos de decorators: **Class Decorators**, **Method Decorators**, **Property Decorators**, entre outros. Abaixo, abordaremos brevemente a respeito dos Class Decorators.

## Class Decorators

Como seu próprio nome diz, um Class Decorator é declarado imediatamente antes de uma declaração de classe. O Class Decorator é aplicado ao constructor da classe e poderá ser usado para observar ou modificar alguma definição da classe.

Exemplo: 

    function DecoratorX(constructor)
    {
        return class extends constructor
        {
            newProperty = "nova propriedade";
            oi = "override"
        }
    }
    
    @DecoratorX
    class Teste
    {
        property = "propriedade";
        oi: string;
        
        constructor(y: string)
        {
            this.oi = y;   
        }
    }

