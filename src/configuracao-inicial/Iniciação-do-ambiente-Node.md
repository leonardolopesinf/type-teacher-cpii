 # Iniciação do ambiente Node

Você precisa ter o [Visual Studio Code](https://code.visualstudio.com/download) e o [Node.JS]( https://nodejs.org/en/) instalados em sua maquina.

O primeiro passo é criar a pasta que irá armazenar o seu projeto.

>obs: a pasta não pode ter caracteres especiais no nome, ou se chamar "typescript".

Em seguida, abra o **cmd**. Use o comando cd para mudar o diretório  para chegar até sua pasta.

Ex:

```
cd Users            // Troca o repositório de C:\ para Users.
cd fulano             // Troca o repositório de Users para fulano.
cd Desktop        // Troca o repositório para Desktop. 
cd meuprojeto       // Troca o repositório para meuprojeto.
```

## Configuração do Servidor 

No servidor Node, o TypeScript será instalado por meio da ferramenta Node Package Manager (Npm).

```
npm init
```
O node irá pedir as configurações iniciais para o servidor.

```
package name: (projeto)        // Nome do seu servidor; lembrando que não pode conter caracteres especiais.
version: (1.0.0)              // Versão do Node ao qual será usada.
description:                 // Descrição sobre o seu servidor.
entry point: (index.js)     // Arquivo JavaScript que o servidor irá usar como página principal.
test command:              // Comando de Teste.
git repository:           // Repositório Git.
keywords:                // Palavras chaves para o servidor.
author:                 // Autor do servidor.
license: (ISC)         // Licença usada pelo servidor.
```

No final, aperte o "enter" para confirmar todos os dados.


