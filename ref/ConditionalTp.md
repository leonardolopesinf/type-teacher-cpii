# Conditional Types
### Os tipos condicionais permitem que um tipo seja definido dinamicamente com base em uma condição fornecida.
### Todos os tipos de condicionais seguem o mesmo formato:
```
T extends U ? X : Y 
```
### O tipo acima significa quando T é atribuível ao U tipo X, caso contrário o tipo é Y.
### Um tipo condicional T extends U ? X : Y é resolvido para X ou Y, ou adiado porque a condição depende de uma ou mais variáveis de tipo.
