## API Endpoints

Para fazer as requisições abaixo, foi utilizada a ferramenta [Httpie](https://httpie.io):

- Criar Usuário

```
Requisição:

http POST localhost:8000/luminacritics/usuarios/criar/ primeiro_nome="goku" sobrenome="kakaroto" email="songoku@gmail.com" senha="supersayajin"

Resposta:

HTTP/1.1 201 Created
Allow: POST, OPTIONS
Content-Length: 82
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Thu, 28 Sep 2023 19:56:41 GMT    
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5  
Vary: Accept, origin
X-Content-Type-Options: nosniff        
X-Frame-Options: DENY

{
    "email": "songoku@gmail.com",
    "id": 2,
    "primeiro_nome": "goku",     
    "sobrenome": "kakaroto"      
}
```

- Fazer Login

```
Requisição:

http POST localhost:8000/luminacritics/login/ username="songoku@gmail.com" password="supersayajin"

Resposta:

HTTP/1.1 200 OK     
Allow: POST, OPTIONS
Content-Length: 483
Content-Type: application/json
Cross-Origin-Opener-Policy: same-origin
Date: Thu, 28 Sep 2023 19:59:21 GMT
Referrer-Policy: same-origin
Server: WSGIServer/0.2 CPython/3.11.5
Vary: Accept, origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY

{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1OTMxNDYxLCJpYXQiOjE2OTU5MzExNjEsImp0aSI6IjJkMDlkMGUxZDA2ODQwMGZhZmI3ZDRhNWIyNWQ3ZmNkIiwidXNlcl9pZCI6M30.ESXXbHcmzwJw0-CUFBRAhH-rBiq6c1nfcH_EnM6nFCc",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NjAxNzU2MSwiaWF0IjoxNjk1OTMxMTYxLCJqdGkiOiJjMDdiZDAyMTYzMWE0MzhjOWZmM2U3ODJmMzFkOWVjNyIsInVzZXJfaWQiOjN9.zMFURBeidcFGf3ko1wRkjxHxEyWHRqVfH-Rv161ZLrI"
}
```
