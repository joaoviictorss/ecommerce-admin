# E-commerce Admin

Bem-vindo ao Administrador de E-commerce! Este projeto foi desenvolvido junto com o professor Antonio do canal Code with Antonio, trata-se de um administrador de ecommerce desenvolvido para facilitar o gerenciamento de produtos, tamanhos, cores e seções de um e-commerce, além de fornecer um dashboard completo para o gerenciamento das vendas.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Zustand**: Biblioteca para gerenciamento de estado.
- **Clerk**: Solução de autenticação e gerenciamento de usuários.
- **Tailwind CSS**: Framework CSS para estilização.
- **ShadcnUI**: Biblioteca de componentes UI para React.

## Funcionalidades

- **Gerenciamento de Produtos**: Adicione, edite e remova produtos do e-commerce.
- **Gerenciamento de Tamanhos**: Gerencie os diferentes tamanhos disponíveis para os produtos.
- **Gerenciamento de Cores**: Adicione e gerencie as cores disponíveis para os produtos.
- **Gerenciamento de Seções**: Organize os produtos em diferentes seções do e-commerce.
- **Dashboard de Vendas**: Acompanhe e analise as vendas através de um painel intuitivo.

## Variveis de ambiente

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= pk_test_c3RpcnJpbmctc25hcHBlci01MS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY= clerk chave secreta
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL= conecta prisma ao banco de dados

DIRECT_URL= url do banco de dados

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= cloudnary name

STRIPE_API_KEY= chave de api do stripe
FRONTEND_STORE_URL= url da loja criada no ecommerce-store
STRIPE_WEBHOOK_SECRET = stripe webhook

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- NPM ou Yarn

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   
2. **Instalar dependencias:**

    ```bash
    npm install
    ```
  
3.  **Authenticar e criar uma loja**

    Guardar o id da loja para adicionar nas variaveis de ambiente de Ecommerce-store

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev



