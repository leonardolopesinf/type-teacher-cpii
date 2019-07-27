# Enum

Enums nos permitem definir um conjunto de constantes. Seu uso pode facilitar tarefas como criar um conjunto de casos diferentes. o Typescript nos fornece enumerações baseadas em _string_ ou numéricas.

## Enum Numérico:

Como o próprio nome diz, um enum numérico agrupa valores numéricos. Por exemplo:

    enum Bussola
    {
        Norte = 1,
        Sul,
        Leste,
        Oeste,
    }

Acima temos um enum númerico onde Norte é inicializado com **1**, consequentemente, todos os membros a seguir serão auto-incrementados a partir desse mesmo ponto. Ou seja: Bussola.Norte possui o valor **1**, Bussola.Sul possui o valor **2**, Bussola.Leste possui o valor **3** e Bussola.Oeste possui o valor **4**.

**E se quiséssemos deixar de lado o inicializador 1?** Nesse caso, Bussola.Norte possuiria o valor 0, Bussola.Sul possuiria o valor 1, e assim por diante.

## Enum baseada em String:

Um enum de strings são semelhantes ao enum numérico, com a diferença de que em um enum de strings, cada um de seus membros devem ser inicializados com valores string ou com um outro membro de enum string. Por exemplo:

    enum Bussola
    {
        Norte = "NORTE",
        Sul = "SUL",
        Leste = "LESTE",
        Oeste = "OESTE",
    }

**Observação importante: uma enum de strings não possui auto-incremento!! (assim como ocorre em um enum numérico)**

## Enum heterogêneo:

Tecnicamente enums podem misturar membros numéricos e membros de string (embora não seja algo muito corriqueiro). Por exemplo:

    enum Exemplo
    {
        Não = 0,
        Sim = "SIM",
    }
