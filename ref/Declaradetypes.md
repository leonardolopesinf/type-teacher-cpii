# Declaração de types
### No TypeScript, suportamos praticamente os mesmos tipos que você esperaria em JavaScript, com um tipo de enumeração conveniente para ajudar as coisas
### Eles podem ser :
+ **Booleano** : O tipo de dados mais básico é o valor true / false simples, que JavaScript e TypeScript chamam um boolean valor.
```
let isDone: boolean = false;
```
+ **Numero** : Como no JavaScript, todos os números no TypeScript são valores de ponto flutuante. Esses números de ponto flutuante recebem o tipo number. Além dos literais hexadecimais e decimais, o TypeScript também suporta literais binários e octal introduzidos no ECMAScript 2015.
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
+ **String** : Outra parte fundamental da criação de programas em JavaScript para páginas da Web e servidores é trabalhar com dados textuais. Como em outros idiomas, usamos o tipo string para nos referirmos a esses tipos de dados textuais. Assim como o JavaScript, o TypeScript também usa aspas duplas ( ") ou aspas simples ( ') para envolver os dados da string.
```
let color: string = "blue";
color = 'red';
```
+ **Matriz** : O TypeScript, como o JavaScript, permite que você trabalhe com matrizes de valores. Os tipos de matriz podem ser gravados de duas maneiras. No primeiro, você usa o tipo de elementos seguido [] para denotar uma matriz desse tipo de elemento:
```
let list: number[] = [1, 2, 3];
```
A segunda maneira usa um tipo de matriz genérica Array<elemType>:
```
let list: Array<number> = [1, 2, 3];
```

> OBS: Existem mais como never , any , void e tuple . Esses estão no Referencias II
