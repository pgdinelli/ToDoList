# ToDoList
Projeto de aplicação web de uma To-Do List (lista de tarefas).

https://github.com/user-attachments/assets/b2209439-f6f0-4c03-94db-491613a36ca8

## Sobre o projeto
Foi desenvolvido utilizando stack **MERN** (MongoDB, Express, React e Nodejs), conexão com o banco de dados em nuvem **MongoDB Atlas**, **Node** e **Express** para o backend e **React** para o frontend. O projeto também busca seguir os padrões de **arquitetura MVC**, mantendo a organização do código e o tornando mais limpo.

## Desenvolvimento
### Backend
O backend do projeto foi estruturado de forma simples, tendo um arquivo **server.js** responsável inicializar o servidor e a conexão com o banco de dados, utilizando as configurações padrão do **express** e um middleware para resolver problemas de **CORS** e garantir a comunicação entre o back e o front. 

A pasta **models** é responsável por manter o **Schema** de uma Task no banco de dados, que possui os atributos título, descrição e status de uma task, sendo este último um booleano que verifica se uma tarefa está marcada como concluída ou não. A pasta **database** mantém a parte do programa responsável por se conectar ao **MongoDB Atlas**, utilizando o pacote **mongoose** para gerenciar esta conexão.

A pasta **controllers** contém o arquivo **taskController.js** onde toda a lógica da API REST é desenvolvida. Para esta aplicação foi implementado apenas os principais métodos de um **CRUD** (Create, Read, Update, Delete), que respondem com seus respectivos códigos de status HTTP dependendo do sucesso ou não de uma requisição. Já a pasta **routes** contém o arquivo **taskRoutes.js**, responsável por gerenciar as rotas do servidor para os respectivos métodos HTTP (GET, POST, PUT e DELETE).
