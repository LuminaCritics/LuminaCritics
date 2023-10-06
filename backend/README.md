## Como executar o projeto

- Clone o repositório

- Dentro da pasta backend execute o comando a seguir para criar o ambiente virtual (certifique-se de ter a versão mais atual do python instalada em sua máquina):
```
python -m venv venv
```

- Ative o ambiente virtual(no Windows):

```
/venv/Scripts/activate
```

- Ative o ambiente virtual(no Linux):

```
source venv/bin/activate
```

- Com o ambiente virtual ativado, na pasta backend execute o seguinte comando para instalar as dependências:

```
pip install -r requirements.txt
```

- Agora, execute o seguinte comando para iniciar o servidor:


```
python manage.py runserver
```
## API Endpoints

Para fazer as requisições abaixo, foi utilizada a ferramenta [Httpie](https://httpie.io):

- Criar Usuário

```
Requisição:

http POST localhost:8000/luminacritics/usuarios/criar/ username="luffy" email="gomugomu@gmail.com" password="gearfifth"

Resposta:

HTTP/1.1 201 Created
Allow: OPTIONS, POST
Content-Length: 56
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 14:31:47 GMT    
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5  
Vary: Accept, origin
X-Content-Type-Options: nosniff        
X-Frame-Options: DENY

{
    "email": "gomugomu@gmail.com",
    "id": 3,
    "username": "luffy"
}
```

- Fazer Login

```
Requisição:

http POST localhost:8000/luminacritics/usuarios/login/ username="luffy" password="gearfifth"

Resposta:

HTTP/1.1 200 OK
Allow: OPTIONS, POST
Content-Length: 240
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 14:33:28 GMT    
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5  
Vary: Accept, origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NjA2NDA4LCJpYXQiOjE2OTY2MDI4MDgsImp0aSI6IjBjMWU3OWYwNmU4ZDQxNDBhYmJiN2UyNmM3YTQ1YzliIiwidXNlcl9pZCI6M30.m7TzLR-HXeWs6pzEgpLnr5IcKGTGVgOU45NaZ9plHWM"
}
```

- Listar usuários

```
Requisição:

http GET localhost:8000/luminacritics/usuarios/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NjA2NzQ5LCJpYXQiOjE2OTY2MDMxNDksImp0aSI6ImY0ZWYzNmZhYzc4NDQ1ODA5Y2UzYzNlMmI3ZDU0MGVkIiwidXNlcl9pZCI6M30.cbqXEDrkrAVOoRcrZaj8TWerFsMztzx6QkbWYxYwxPo"

Resposta:

HTTP/1.1 200 OK
Allow: OPTIONS, GET
Content-Length: 114
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 14:39:58 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5
Vary: Accept, origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

[
    {
        "email": "luccas@gmail.com",
        "id": 2,
        "username": "Luccas"
    },
    {
        "email": "gomugomu@gmail.com",
        "id": 3,
        "username": "luffy"
    }
]
```

- Buscar usuário por ID

```
Requisição:

http GET localhost:8000/luminacritics/usuarios/4/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NjEwNzE3LCJpYXQiOjE2OTY2MDcxMTcsImp0aSI6IjFjOGQ4MzBhN2I0OTRmOGZiY2E1MDVkNGUxNGJmZWE3IiwidXNlcl9pZCI6NH0._-pMnY3AW6H8hcAIjlfbgmmdHOa67v_lOLrmfRvv_-8"

Resposta:

HTTP/1.1 200 OK
Allow: OPTIONS, GET
Content-Length: 56
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 15:45:57 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5
Vary: Accept, origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "email": "gomugomu@gmail.com",
    "id": 4,
    "username": "luffy"
}
```

- Atualizar usuário

```
Requisição:

http PUT localhost:8000/luminacritics/usuarios/3/ username="Luffy" email="kaizoku-o@gmail.com" password="gearfifth" "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NjA2NzQ5LCJpYXQiOjE2OTY2MDMxNDksImp0aSI6ImY0ZWYzNmZhYzc4NDQ1ODA5Y2UzYzNlMmI3ZDU0MGVkIiwidXNlcl9pZCI6M30.cbqXEDrkrAVOoRcrZaj8TWerFsMztzx6QkbWYxYwxPo"

Resposta:

HTTP/1.1 200 OK
Allow: OPTIONS, PUT
Content-Length: 57
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 14:43:36 GMT    
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5  
Vary: Accept, origin
X-Content-Type-Options: nosniff        
X-Frame-Options: DENY

{
    "email": "kaizoku-o@gmail.com",
    "id": 3,
    "username": "Luffy"
}
```

- Remover usuário

```
Requisição:

http DELETE localhost:8000/luminacritics/usuarios/3/remover/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2NjA2NzQ5LCJpYXQiOjE2OTY2MDMxNDksImp0aSI6ImY0ZWYzNmZhYzc4NDQ1ODA5Y2UzYzNlMmI3ZDU0MGVkIiwidXNlcl9pZCI6M30.cbqXEDrkrAVOoRcrZaj8TWerFsMztzx6QkbWYxYwxPo"

Resposta:

HTTP/1.1 204 No Content
Allow: DELETE, OPTIONS
Content-Length: 0
Cross-Origin-Opener-Policy: same-origin
Date: Fri, 06 Oct 2023 14:45:21 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5
Vary: Accept, origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
```
