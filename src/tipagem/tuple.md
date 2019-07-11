# Tipo básico tuple
### Os tipos de Tuple permitem expressar um array (matriz) com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos. Por exemplo, você pode querer representar um valor como um par de um string e um number:
```
// Declarar um tipo tuple
let x: [string, number];
// Maneira correta
x = ["hello", 10]; // OK , pois "hello" combina com string e 10 com number
// Maneira incorreta
x = [10, "hello"]; // Erro , pois "hello" não combina com number e 10 não combina com string
```
