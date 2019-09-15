# Encapsulamento

O conceito de encapsulamento define uma forma de estruturar o código, garantindo a visibilidade e acessibilidade controladas dos elementos internos da classe.

## Public

Os membros rotulados como _public_ serão visiveis. No TypeScript, cada membro é _public_ por padrão. 

```
class Pessoa {
    public nome: string;
    sobrenome: string; // public
}
```

> No exemplo, _nome_ e _sobrenome_ são declarados como públicos. Eles podem ser acessados fora da classe usando um objeto da classe

## Private

Os métodos privados são para ocultar detalhes de implementação de como uma classe funciona para o usuário da classe, ou seja, o modificador de acesso privado garante que os membros da classe sejam visíveis apenas para essa classe e não estejam acessíveis fora da classe que os contém

```
class Conta{
    private _saldo: number;

    get saldo(): number {
        return this._saldo; 
    }
}
```

## Read Only

Membros _readonly_ podem ser acessados fora da classe, porém seu valor não pode ser alterado. Como os membros _readonly_ não podem ser alterados fora da classe, eles precisam ser inicializados na declaração ou inicializados dentro do construtor da classe.

```
Class Pessoa { 
    public nome: string; 
    readonly cpf: string; 
} 
```

## Protected

Os membros da classe marcados como protegidos só podem ser acessados a partir dos métodos internos da classe ou de seus descendentes. Para dois tipos serem considerados compatíveis, sendo um deles um membro protected, o outro deverá ter um membro protected originado na mesma declaração.

```
class Animal extends Stateful {
  protected _happy: boolean;
 
  pet(): void {
    this._happy = true;
  }
}
```
