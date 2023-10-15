# angular-signal

Este projeto tem como objetivo demonstrar o uso do Signal em aplicações Angular. O Signal é uma abstração de estado reativa e observável que permite o gerenciamento eficiente de dados e ações em um aplicativo Angular.

## Versões do Angular

Este projeto foi criado usando as seguintes versões do Angular:

- Angular CLI: 17.0.0-next.9
- Angular: 17.0.0-next.8

## O que é o Signal?

O Signal é uma abstração de estado reativa e observável que simplifica o gerenciamento de estado em aplicativos Angular. Ele elimina a necessidade de usar serviços, BehaviorSubjects ou Observables complexos para gerenciar o estado de forma reativa.

## Conceitos Principais

- **WritableSignal**: Um Signal que pode ser atualizado diretamente usando os métodos `set` ou `update`.

- **Signal**: Um Signal somente leitura que emite valores quando seus valores dependem de outros Signals ou dados externos.

## Métodos Relevantes

- **`set(value: T): void`**: Define o valor do Signal para um novo valor.

- **`update(callback: (current: T) => T): void`**: Atualiza o valor do Signal usando uma função de callback.

## Como Executar o Projeto

Siga estas etapas para executar o projeto em sua máquina:

1. Clone este repositório usando o comando
2. Navegue até o diretório do projeto
3. Instale as dependências usando o `npm install`
4. Inicie o servidor de desenvolvimento com `npm install`
5. Abra seu navegador e acesse `http://localhost:4200/` para ver o aplicativo em ação.

