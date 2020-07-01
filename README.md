# Aplicação de Cadastro de Usuário
Projeto de teste para o processo seletivo de uma vaga de estágio na **[ADIN](https://www.adin.com.br/)/[ClaraVista](https://www.claravista.com.br/)**
***

## Instalação

1. Clone o repositório do projeto.

>`git clone https://github.com/thiago-alves-silva/react-user-registration.git`

2. Instale as dependencias do servidor da API.

>`cd api-nodejs`

>`npm install`

3. Executando o servidor da API.

>`cd api-nodejs`

>`npm start`

Acesse a rota [http://localhost:3001/api/users](http://localhost:3001/api/users) e certifique-se de que o API está disponível. *Um array (inicialmente vazio) deve ser retornado ao entrar a página*.

4. Instale as dependencias da aplicação.

>`cd register-user`

>`npm install`

5. Execute a aplicação *React*.

>`cd register-user`

>`npm start`

Uma página web será aberta na rota [http://localhost:3000/](http://localhost:3000/) com uma tela de login sendo exibida.

## Utilização
***

### Tela de Login
![Tela de Login](./readme-images/login-screen.png)
Caso não tenha um usuário cadastrado para fazer login, clique em **`Registre-se`**.
***

### Tela de cadastro
Todos os campos devem ser preenchidos para a realização do cadastro, seguindo as seguintes regras de preenchimento:
* O nome deve conter pelo menos 4 caracteres.
* Um formato de e-mail válido deve ser inserido (*nome@provedor*).
* O CPF deve conter no mínimo 11 caracteres *(sem pontuação)* e no máximo 14 caracteres *(com pontuação)*.
* A senha deve conter pelo menos 6 dígitos.
* A confirmação de senha deve ser identica à senha do campo anterior.

![Tela de Cadastro](./readme-images/register-screen.png)
Após realizar o registro de um usuário, clique em **`Fazer login`** para entrar com o seu cadastro.
***

### Validação de campos na Tela de Cadastro
![Erros na Tela de Cadastro](./readme-images/errors-register-screen.png)
***

### Validação de campos na Tela de Login
![Erros na Tela de Cadastro](./readme-images/errors-login-screen.png)