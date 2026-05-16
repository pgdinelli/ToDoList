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

### Frontend
A estrutura do frontend se baseia em um padrão utilizado por aplicações em **React**, onde se tem um arquivo **main.jsx** responsável por carregar o componente **App**, que está sendo mantido pelo arquivo **App.jsx**. Este arquivo por sua vez é responsável por renderizar todos os componentes principais da página web, que estão localizados na pasta **components**, para o caso desta aplicação temos apenas dois componentes: **Title** e **TaskForm**. Já para estilização da página, foi utilizado **TailwindCSS** economizando tempo e simplicidade no desenvolvimento do front.

O componente **Title** renderiza o título da página, já o **TaskForm** é onde a funcionalidade principal da aplicação foi desenvolvida, pois este componente renderiza toda a parte do formulário que captura o input do usuário e também a lista com as tarefas que são registradas no sistema.

O useState **tasksArr** é responsável por manter um array onde todas as tarefas serão salvas posteriormente renderizadas, enquanto que o **task** se refere aos campos onde o usuário digita o título e a descrição de uma tarefa. Já os useState **editingTask** e **editTask** correspondem a tarefas que podem ser modificadas pelo usuário, alterando título e a descrição das mesmas.

O useEffect renderiza a lista de tarefas em seu estado atual. Dentro do seu escopo há uma função assíncrona **getTasks** que, através do método **fetch()** do **JavaScript**, faz uma requisição do tipo GET ao servidor para buscar as tarefas salvas no banco.

O método **handleSubmit** é responsável por enviar os dados digitados do usuário dos campos de título e descrição da tarefa. Este método captura o evento do formulário e, através de uma requisição POST, envia estes dados para o backend.

O método **handleTaskChecked** verifica se uma tarefa foi marcada como concluída ou não. Este irá fazer uma requisição do tipo PUT para que seja alterado apenas um atributo de uma única tarefa, sendo este atributo o booleano status. Desta forma basta utilizar o operador lógico de negação para trocar o valor entre true ou false e, dependendo do valor atual, irá renderizar uma estilização específica para a task.

Os métodos **handleUpdate** e **handleDelete** irão respectivamente enviar as requisições de PUT e DELETE para o backend, indicando que houve uma alteração ou remoção de uma task. Estes métodos serão executados ao ativar o evento **onClick** dos botões de alterar e remover uma task da lista, que estão indicados por ícones ao lado de cada tarefa.

## Tecnologias utilizadas
- JavaScript
- Nodejs
- Express
- Mongoose
- MongoDB Atlas
- React
- TailwindCSS
- Vite
- React-icons

## Deploy do projeto
- https://to-do-list-henna-iota-91.vercel.app/

## Rode o projeto localmente
Faça o download do projeto através do repositório do GitHub, abra o projeto no **VSCode** e no terminal rode o comando `npm install` para instalar todas as dependências necessárias.

### Rodar o frontend
Verifique no terminal do editor de código se está dentro da pasta **frontend**, caso não esteja acesse a pasta utilizando `cd frontend` e então execute o comando `npm run dev` para iniciar o servidor Vite do front.

### Rodar o backend
Abra outro terminal no **VSCode** e verifique se está na pasta **backend**, caso ainda esteja dentro da pasta do frontend use o comando `cd ..` para voltar a pasta raiz do projeto e então faça `cd backend`. Ao entrar na pasta do backend, utilize o comando `npm run start` para rodar o servidor.

## Autor do projeto
**Paulo Guilherme Souza Dinelli**
- **Linkedin:** https://www.linkedin.com/in/paulodinelli/
- **GitHub:** https://github.com/pgdinelli
