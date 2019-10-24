# Extends (Herança)
### Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos, Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos.
### Para utilizar a Herança no typescript usamos o comando ```extends``` com o nome da classe derivada antes do comando e a classe que vai dar os atributos e métodos depois do comando , Veja no simples exemplo:
```
class Animal 
{
 let possuicelula : boolean = true;     
}

class gato extends Animal
{
 miar() {
        console.log('Miau !!!');
    }   
}
```
No exemplo criamos a classe Animal com um atibuto que foi passado para a classe gato, isso permetiu que eu não precisasse escrever o mesmo atributo que eu coloquei na classe animal.
### OBS : Existem modifiers como o public , private e protect. Quando não colocamos nada por padrão fica o public. Quando um atributo da classe "Pai" (que iremos copiar pra outra) possui o public ele poderá ser acessado em outras classes sem ter necessariamente a herança . Quando usamos o private no atributo fazemos o atributo funcionar apenas na classe que ele foi declarado/criado . Quando usamos o protect podemos usar o atributo nas classes que foram derivadas (tem a herança) da classe "Pai".
