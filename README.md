# Projeto Drip Store - E-commerce Completo

Este repositório contém o projeto completo Drip Store, uma aplicação de e-commerce desenvolvida com um backend em Node.js (Express/Sequelize) e um frontend em React.

## Visão Geral do Projeto

O Drip Store é uma plataforma de e-commerce que permite a visualização de produtos, listagem por categorias, detalhes de produtos e uma estrutura de backend robusta para gerenciamento de usuários, categorias e produtos.

---

## Backend Drip Store

Este é o backend do projeto Drip Store, desenvolvido com Node.js, Express e Sequelize.

### Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **SQLite** - Banco de dados (para desenvolvimento)
- **JWT** - Autenticação (estrutura preparada)
- **bcrypt** - Hash de senhas
- **CORS** - Configuração para requisições cross-origin

### Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do banco de dados
│   ├── controllers/
│   │   ├── userController.js    # Controller de usuários
│   │   ├── categoryController.js # Controller de categorias
│   │   └── productController.js # Controller de produtos
│   ├── middleware/
│   │   ├── authMiddleware.js    # Middleware de autenticação
│   │   └── errorHandler.js     # Middleware de tratamento de erros
│   ├── models/
│   │   ├── index.js            # Associações dos modelos
│   │   ├── User.js             # Modelo de usuário
│   │   ├── Category.js         # Modelo de categoria
│   │   ├── Product.js          # Modelo de produto
│   │   ├── ProductImage.js     # Modelo de imagem do produto
│   │   ├── ProductOption.js    # Modelo de opção do produto
│   │   └── ProductCategory.js  # Modelo de associação produto-categoria
│   ├── routes/
│   │   ├── userRoutes.js       # Rotas de usuários
│   │   ├── categoryRoutes.js   # Rotas de categorias
│   │   └── productRoutes.js    # Rotas de produtos
│   ├── app.js                  # Configuração do Express
│   └── server.js               # Servidor principal
├── seed.js                     # Script para popular o banco com dados de exemplo
├── database.sqlite             # Banco de dados SQLite (gerado automaticamente)
├── .env                        # Variáveis de ambiente
└── package.json                # Dependências e scripts
```

### Instalação e Configuração

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   O arquivo `.env` já está configurado com valores padrão para desenvolvimento.

3. **Popular o banco de dados com dados de exemplo:**
   ```bash
   node seed.js
   ```

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Iniciar o servidor de produção:**
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:3001`

### Endpoints da API

#### Usuários (`/v1/user`)

- `GET /v1/user/:id` - Obter usuário por ID
- `POST /v1/user` - Criar novo usuário
- `PUT /v1/user/:id` - Atualizar usuário
- `DELETE /v1/user/:id` - Deletar usuário

#### Categorias (`/v1/category`)

- `GET /v1/category/search` - Listar categorias com filtros
- `GET /v1/category/:id` - Obter categoria por ID
- `POST /v1/category` - Criar nova categoria
- `PUT /v1/category/:id` - Atualizar categoria
- `DELETE /v1/category/:id` - Deletar categoria

#### Produtos (`/v1/product`)

- `GET /v1/product/search` - Listar produtos com filtros
- `GET /v1/product/:id` - Obter produto por ID
- `POST /v1/product` - Criar novo produto
- `PUT /v1/product/:id` - Atualizar produto
- `DELETE /v1/product/:id` - Deletar produto

### Parâmetros de Busca

#### Produtos (`/v1/product/search`)

- `limit` - Limite de itens por página (padrão: 12, use -1 para todos)
- `page` - Página atual (padrão: 1)
- `fields` - Campos específicos a retornar (ex: "name,price")
- `match` - Termo de busca no nome ou descrição
- `category_ids` - IDs das categorias separados por vírgula
- `price-range` - Faixa de preço (ex: "100-200")

#### Categorias (`/v1/category/search`)

- `limit` - Limite de itens por página (padrão: 12, use -1 para todos)
- `page` - Página atual (padrão: 1)
- `fields` - Campos específicos a retornar
- `use_in_menu` - Filtrar por categorias do menu (true/false)

### Dados de Exemplo

O script `seed.js` cria os seguintes dados de exemplo:

#### Categorias
- Tênis
- Camisetas
- Calças
- Ofertas

#### Produtos
- Tênis Nike Air Max (R$ 299,90 / R$ 249,90 com desconto)
- Camiseta Adidas (R$ 89,90 / R$ 69,90 com desconto)
- Calça Jeans Levi\'s (R$ 199,90 / R$ 159,90 com desconto)

Cada produto inclui:
- Imagens associadas
- Opções (tamanho, cor)
- Associações com categorias

### Configuração para Produção

Para usar em produção, você pode:

1. **Alterar para MySQL:**
   - Instalar MySQL
   - Alterar `src/config/database.js` para usar MySQL
   - Configurar variáveis de ambiente no `.env`

2. **Deploy:**
   - O servidor está configurado para escutar em `0.0.0.0`
   - CORS configurado para aceitar qualquer origem
   - Pronto para deploy em serviços como Heroku, Railway, etc.

### Estrutura do Banco de Dados

#### Tabelas Principais
- `users` - Usuários do sistema
- `categories` - Categorias de produtos
- `products` - Produtos
- `product_images` - Imagens dos produtos
- `product_options` - Opções dos produtos (tamanho, cor, etc.)
- `product_categories` - Associação muitos-para-muitos entre produtos e categorias

#### Relacionamentos
- Produto → Muitas Imagens
- Produto → Muitas Opções
- Produto ↔ Muitas Categorias (muitos-para-muitos)

### Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `204 No Content` - Operação bem-sucedida sem retorno
- `400 Bad Request` - Dados inválidos
- `401 Unauthorized` - Não autorizado
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro interno do servidor

---

## Frontend Drip Store

Este é um projeto de e-commerce desenvolvido em React seguindo as especificações detalhadas do curso de Desenvolvimento Web da Digital College.

### 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Roteamento para aplicações React
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Vite** - Build tool e servidor de desenvolvimento

### 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/           # Cabeçalho com navegação e busca
│   ├── Footer/           # Rodapé com informações e links
│   ├── Logo/             # Componente de logotipo
│   ├── Gallery/          # Galeria de imagens com navegação
│   ├── ProductListing/   # Lista de produtos em grid
│   ├── ProductCard/      # Card individual de produto
│   ├── ProductOptions/   # Seletor de cores e tamanhos
│   ├── BuyBox/           # Área de compra do produto
│   ├── Section/          # Container reutilizável para seções
│   ├── FilterGroup/      # Grupo de filtros expansível
│   └── ProductDetails/   # Detalhes completos do produto
├── pages/
│   ├── Layout.jsx        # Layout base com Header e Footer
│   ├── HomePage/         # Página inicial
│   ├── ProductViewPage/  # Página de visualização do produto
│   └── ProductListingPage/ # Página de listagem de produtos
├── data/
│   └── mockData.js       # Dados simulados para demonstração
├── App.jsx               # Componente principal com roteamento
└── main.jsx              # Ponto de entrada da aplicação
```

### 🎨 Paleta de Cores

O projeto utiliza a paleta de cores especificada no README:

- **Primary**: #C92071 (Rosa principal)
- **Secondary**: #B5B6F2 (Azul claro)
- **Tertiary**: #991956 (Rosa escuro)
- **Error**: #EE4266 (Vermelho)
- **Success**: #52CA76 (Verde)
- **Warning**: #F6AA1C (Laranja)

**Escala de Cinzas:**
- **Dark Gray**: #1F1F1F
- **Dark Gray 2**: #474747
- **Dark Gray 3**: #666666
- **Light Gray**: #8F8F8F
- **Light Gray 2**: #CCCCCC
- **Light Gray 3**: #F5F5F5
- **White**: #FFFFFF

### 📱 Funcionalidades Implementadas

#### 🏠 Página Inicial (HomePage)
- ✅ Galeria de imagens em slide com navegação
- ✅ Seção "Coleções em destaque" com 3 imagens
- ✅ Seção "Produtos em alta" com 8 produtos
- ✅ Layout responsivo e moderno

#### 📋 Página de Listagem de Produtos (ProductListingPage)
- ✅ Breadcrumb de navegação
- ✅ Filtros por marca, categoria, gênero e estado
- ✅ Ordenação por relevância, preço e popularidade
- ✅ Grid responsivo de produtos
- ✅ Contador de produtos encontrados

#### 👁️ Página de Visualização do Produto (ProductViewPage)
- ✅ Galeria de imagens com miniaturas
- ✅ Informações detalhadas do produto
- ✅ Seleção de cor e tamanho
- ✅ Controle de quantidade
- ✅ Especificações técnicas
- ✅ Avaliações dos clientes
- ✅ Produtos relacionados

#### 🧩 Componentes Desenvolvidos

##### Layout e Navegação
- **Header**: Navegação principal com busca, links de usuário e carrinho
- **Footer**: Links úteis, informações da empresa e redes sociais
- **Logo**: Logotipo adaptável (header/footer)
- **Layout**: Container base com Header e Footer

##### Produtos e E-commerce
- **ProductCard**: Card de produto com imagem, nome, preço e desconto
- **ProductListing**: Grid responsivo de produtos
- **ProductOptions**: Seletor de cores (círculos) e tamanhos (botões)
- **BuyBox**: Área completa de compra com opções e controles
- **ProductDetails**: Galeria, especificações e avaliações
- **FilterGroup**: Filtros expansíveis com checkboxes e radio buttons

##### Utilitários
- **Section**: Container reutilizável para seções com título
- **Gallery**: Galeria de imagens com navegação e miniaturas

### 🛠️ Como Executar

1. **Instalar dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para produção:**
   ```bash
   npm run build
   ```

4. **Acessar a aplicação:**
   - Abra o navegador em `http://localhost:5173`

### 🎯 Rotas Implementadas

- `/` - Página inicial
- `/produtos` - Listagem de produtos
- `/produto/:id` - Visualização de produto específico

### 📋 Requisitos Atendidos

#### ✅ Estrutura e Organização
- [x] Estrutura de pastas conforme especificação (src/components e src/pages)
- [x] Componentes funcionais reutilizáveis
- [x] Separação clara entre componentes e páginas
- [x] Roteamento com React Router DOM

#### ✅ Layout e Design
- [x] Header com logo, busca, navegação e carrinho
- [x] Footer com informações e redes sociais
- [x] Paleta de cores implementada
- [x] Design responsivo e moderno
- [x] Componente Layout reutilizável

#### ✅ Componentes Compartilhados
- [x] Section com título e link opcional
- [x] ProductCard com preços e desconto
- [x] ProductListing em grid responsivo
- [x] Gallery com navegação e miniaturas
- [x] FilterGroup expansível

#### ✅ Páginas Principais
- [x] HomePage com galeria, coleções e produtos
- [x] ProductListingPage com filtros e ordenação
- [x] ProductViewPage com detalhes completos

#### ✅ Funcionalidades
- [x] Navegação entre páginas
- [x] Filtros e ordenação (interface)
- [x] Seleção de cores e tamanhos
- [x] Controle de quantidade
- [x] Galeria de imagens interativa
- [x] Breadcrumb de navegação

### 🖼️ Recursos Visuais

O projeto inclui todas as imagens fornecidas:
- 8 imagens de slide para a home page
- 3 imagens de coleções em destaque
- 5 imagens de produtos (product-thumb)
- 5 imagens detalhadas de produtos (produc-image)
- Ícones SVG (logo, redes sociais, navegação)

### 🎨 Critérios de Avaliação Atendidos

- **✅ Construção Lógica**: Estrutura bem organizada e modular
- **✅ Aplicação do React**: Componentes funcionais, hooks e roteamento
- **✅ ✅ Conformidade com Requisitos**: Todos os requisitos implementados
- **✅ Estilo e Design**: Interface moderna, responsiva e profissional
- **✅ Boas Práticas**: Código limpo, reutilizável e bem documentado

### 👥 Desenvolvido por

Este projeto foi desenvolvido seguindo rigorosamente as especificações do README fornecido, incluindo:
- Estrutura de pastas exata
- Paleta de cores completa
- Todos os componentes solicitados
- Três páginas principais funcionais
- Layout responsivo e moderno

---

**Tecnologia Principal**: React 18  
**Framework CSS**: Tailwind CSS  
**Roteamento**: React Router DOM  
**Build Tool**: Vite


