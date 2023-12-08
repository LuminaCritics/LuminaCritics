<h1>Para executar o projeto e realizar requisições à API</h1>

- Utilize o comando a seguir na raiz do projeto (backend) para executá-lo (se não for usar docker):

```bash
 npm i
 npm run dev
```

- Utilize o comando a seguir dentro da pasta backend para rodar o backend no docker :

```bash
docker compose up --build
```

- A API estará disponível na seguinte url base:

```bash
http://localhost:5000/luminacritics
```

- Para criar um novo usuário:

```bash
POST http://localhost:5000/luminacritics/users/create

{
    "name":"Son Goku",
    "email":"kakaroto@gmail.com",
    "password":"supersayan123"
}
```

- Para fazer login:

```bash
POST http://localhost:5000/luminacritics/users/login

{
    "email":"kakaroto@gmail.com",
    "password":"supersayan123"
}
```

- As rotas a seguir são protegidas e acessadas apenas após fazer login e obter o token, para acessá-las utilize o seguinte parâmetro no Header da requisição:

```bash
Authorization: Bearer <token>
```

- Para buscar por id, atualizar usuário e deletar usuário:

```bash
http://localhost:5000/luminacritics/users/<id>
```

- Para buscar todos os usuários:

```bash
http://localhost:5000/luminacritics/users
```

- Para adicionar um comentário:

```bash
POST http://localhost:5000/luminacritics/comentario/<userId>/comentar/<movie_id>

{
    "comment": "adicione um comentário"
}
```

- Para buscar todos os comentários de um usuário:

```bash
GET http://localhost:5000/luminacritics/comentario/:userId/comentarios
```

- Para buscar os comentários de um usuário em um filme:

```bash
GET http://localhost:5000/luminacritics/comentario/:userId/comentarios/:movie_id
```

- Para retornar todos os comentários de um filme:

```bash
GET http://localhost:5000/luminacritics/comentario/all/:movie_id
```

- Para editar um comentário:

```bash
PUT http://localhost:5000/luminacritics/comentario/:userId/comentar/editar/:commentId

{
    "comment": "adicione um comentário"
}
```

- Para deletar um comentário:

```bash
http://localhost:5000/luminacritics/comentario/:userId/comentar/deletar/:commentId
```

- Para adicionar a avaliação ao filme (cada usuário possuí apenas uma avaliação por filme):

```bash
http://localhost:5000/luminacritics/avaliar/:userId/item/:movie_id/:rating
```

- Para retornar a avaliação feita pelo usuário ao filme:

```bash
http://localhost:5000/luminacritics/avaliar/:userId/item/:movie_id/avaliacao
```

- Para retornar todas as avaliações de um filme:

```bash
http://localhost:5000/luminacritics/avaliar/item/:movie_id/avaliacoes
```

- Para editar a avaliação de algum filme:

```bash
http://localhost:5000/luminacritics/avaliar/:userId/item/:movie_id/avaliacao/editar/:rating
```
