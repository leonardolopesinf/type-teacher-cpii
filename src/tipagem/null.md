# Tipo básico null
### Em TypeScript,  null na verdade têm seus próprios tipo nomeado de null.Muito parecido void, eles não é extremamente útil sozinho:
```
// não há muito mais que possamos atribuir a essas variáveis!
let n: null = null;
```
### Por padrão null é subtipo de todos os outros tipos. Isso significa que você pode atribuir null algo parecido number.
