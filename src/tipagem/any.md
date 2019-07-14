# Any 
### Podemos precisar descrever o tipo de variáveis ​​que não sabemos quando estamos escrevendo um aplicativo. Esses valores podem vir de conteúdo dinâmico, por exemplo, do usuário ou de uma biblioteca de terceiros. Nesses casos, queremos desativar a verificação de tipos e deixar os valores passarem pelas verificações de tempo de compilação. Para fazer isso, rotulamos esses com o any, tipo:
```
let algo: any = 4;
algo = "pode ser uma string";
algo = false; //pode ser nesse caso um boolean
```
