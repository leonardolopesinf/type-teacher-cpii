# Implements 

Caso queira usar classes que devem seguir uma estrutura de objeto declarada por alguém em uma interface, você pode usar a palavra-chave *implements* para garantir a compatibilidade.

```
interface Pessoa{
nome: string;
cpf:string;
}
Class MyPessoa implements Pessoa{
nome: string;
cpf:string;
// Tem tudo que tem em Pessoa
 }
```
Qualquer alteração na interface Pessoa externa resultará em um erro de compilação

```
interface Pessoa{
nome: string;
cpf:string;
}
Class MyPessoa implements Pessoa{
nome: string;
cpf:string;
idade:INT;
// Erro. Pessoa não tem o membro idade.
 }
```

# Extends

Uma interface pode estender outra interface. Isso significa que as propriedades e funções de uma também estariam disponíveis para a instância da outra.

```
interface Pessoa{
nome: string;
cpf:string;
}
interface Empresa extends Pessoa{
quant_empregados:INT;
}
// A interface Empresa terá a quantidade de empregados, os nomes deles e o cpf de cada.
```
