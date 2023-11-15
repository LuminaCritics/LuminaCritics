<h1>Para executar o projeto e realizar requisições à API</h1>

- Utilize o comando a seguir na raiz do projeto para executá-lo:

```bash
 npm run dev
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
POST http://localhost:5000/luminacritics/users/create

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