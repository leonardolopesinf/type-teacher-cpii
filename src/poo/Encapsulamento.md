# Encapsulamento

## Conceito:

É uma técnica utilizada principalmente para não expôr detalhes internos de um código/projeto para usuários, ou seja,  tornando partes do sistema mais independentes. Através, do encapsulamento, o programa é separado em partes, assim o tornando
mais flexível, fácil de modificar e de fazer manutenções.

No processo de encapsulamento, podemos definir 3 níveis de visibilidade: **Public**, **Private** ou **Protected**.

**Public:** Nesse nível de visibilidade, todos as classes tem acesso ao atributo.

**Private:** A única classe que tem acesso ao atributo definido como private é a própria classe que o criou, ou seja, se uma classe _Pessoa_ declara um atributo private chamada Nome, só a classe _Pessoa_ terá acesso a ele.

**Protected:** Se uma classe declarar um atributo X, a classe que o declarou e suas sub-classes terão acesso a ela (podendo uma classe que não seja subclasse ter acesso a esse atributo usando _extends_). Ou seja, o acesso ao atributo também é por herança.
