# Classes Genéricas
### Classes genéricas são classes que possuem tipos genéricos(Que são tipos que vão se basear no que eu vou mandar , se eu escrever numeros vai se basear no tipo number), uma classe genérica tem um formato semelhante a uma interface genérica. As classes genéricas têm uma lista de parâmetros de tipo genérico entre colchetes angulares ```<>``` após o nome da classe.Veja o exemplo abaixo:
```
class Login <T>                             // Aqui eu declarei que a classe é genérica através do comando <>
{
  private nome: string;                     // Aqui eu criei uma variável nome com o tipo string porque um nome só tem letras          
  private senha: T;                         // Aqui eu criei uma variável senha com o tipo genérico porque uma senha pode ser number, string ou outros tipos 
  ...                                       // Aqui significa que pode colocar mais código
}
```
