# API de Usuários - Node.js

API REST para gerenciamento de usuários com autenticação utilizando Node.js, Express e MongoDB.

---

##  Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- JWT (JSON Web Token)
- bcrypt

---

##  Estrutura do projeto


config/
middleware/
models/
routes/
server.js
package.json


---

##  Funcionalidades

Esta API permite:

- Criar usuário
- Login de usuário
- Autenticação com JWT
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Deletar usuário
- Senhas criptografadas com bcrypt

---

##  Rotas da API

### Criar usuário

POST /usuarios

Exemplo de body:

json
{
 "nome": "Getúlio",
 "email": "getulio@email.com",
 "senha": "123456"
}


---

### Login

POST /usuarios/login

json
{
 "email": "getulio@email.com",
 "senha": "123456"
}


Resposta:

json
{
 "mensagem": "Login realizado com sucesso",
 "token": "jwt_token"
}


---

### Listar usuários

GET /usuarios

Necessário token JWT no header.

---

### Buscar usuário por ID

GET /usuarios/:id

---

### Atualizar usuário

PUT /usuarios/:id

---

### Deletar usuário

DELETE /usuarios/:id

---

##  Como rodar o projeto

Instalar dependências:


npm install


Rodar o servidor:


node server.js


ou


nodemon server.js


---

##  Servidor

A aplicação roda em:


http://localhost:3000


---

##  Autenticação

Algumas rotas utilizam autenticação via *JWT*.

Enviar token no header:


Authorization: Bearer seu_token


---

##  Objetivo do projeto

Este projeto foi desenvolvido para estudo de *Node.js backend*, implementando uma API REST completa com autenticação e integração com banco de dados MongoDB.

---

##  Autor

Getúlio Mariano Junior
