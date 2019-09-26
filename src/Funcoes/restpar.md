# Rest Operator
### Às vezes, você deseja trabalhar com vários parâmetros como um grupo ou talvez não saiba quantos parâmetros uma função terá. Nessa ocasião você podera usar essa opção do Typescript.Podemos passar zero ou mais argumentos para o parâmetro rest. O compilador criará uma matriz de argumentos com o nome do parâmetro restante fornecido por nós. Por exemplo:
```
function saudar(saudacao: string, ...nomes: string[]) {
    return saudacao + " " + nomes.join(", ") ;
}

saudar("Olá", "Steve", "Bill"); // returns "Olá Steve, Bill"

saudar("Olá");// returns "Olá "

```
#### No exemplo acima, temos uma função com dois parâmetros: saudacao e nomes. Aqui, nomes é um parâmetro de descanso indicado por reticências "..." . Ao chamar a função, passamos primeiro "Steve", "Bill" como os demais parâmetros. Eles são combinados em uma matriz de cadeias juntando os elementos da nomes matriz. Portanto, ele retorna "Olá Steve, Bill!". Durante a segunda chamada de função, não passamos argumentos como os demais parâmetros. Isso é aceito pelo compilador e, portanto, a saída é "Olá!"
### Lembre-se de que os parâmetros de descanso devem vir por último na definição da função; caso contrário, o compilador TypeScript mostrará um erro. O seguinte não é válido.

