# aplicacao-devops

Aplicação web simples construída com Node.js e Express.js, desenvolvida como avaliação N1 da disciplina de Ferramentas de Implantação Contínua - DevOps.

## Integrantes

- Richard Pompeo
- Gustavo Angelo
- Henrique Ferraz

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Como usar

### Pré-requisitos

- Node.js instalado

### Instalação

```bash
npm install
```

### Executar

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints

| Método | Rota           | Descrição                              |
|--------|----------------|----------------------------------------|
| GET    | `/`            | Retorna a página de boas-vindas        |
| GET    | `/integrantes` | Retorna JSON com os nomes do grupo     |
