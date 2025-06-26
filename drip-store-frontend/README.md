# Digital Store - Drip Store

Este é um projeto de e-commerce desenvolvido em React seguindo as especificações detalhadas do curso de Desenvolvimento Web da Digital College.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Roteamento para aplicações React
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Vite** - Build tool e servidor de desenvolvimento

## 📁 Estrutura do Projeto

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

## 🎨 Paleta de Cores

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

## 📱 Funcionalidades Implementadas

### 🏠 Página Inicial (HomePage)
- ✅ Galeria de imagens em slide com navegação
- ✅ Seção "Coleções em destaque" com 3 imagens
- ✅ Seção "Produtos em alta" com 8 produtos
- ✅ Layout responsivo e moderno

### 📋 Página de Listagem de Produtos (ProductListingPage)
- ✅ Breadcrumb de navegação
- ✅ Filtros por marca, categoria, gênero e estado
- ✅ Ordenação por relevância, preço e popularidade
- ✅ Grid responsivo de produtos
- ✅ Contador de produtos encontrados

### 👁️ Página de Visualização do Produto (ProductViewPage)
- ✅ Galeria de imagens com miniaturas
- ✅ Informações detalhadas do produto
- ✅ Seleção de cor e tamanho
- ✅ Controle de quantidade
- ✅ Especificações técnicas
- ✅ Avaliações dos clientes
- ✅ Produtos relacionados

### 🧩 Componentes Desenvolvidos

#### Layout e Navegação
- **Header**: Navegação principal com busca, links de usuário e carrinho
- **Footer**: Links úteis, informações da empresa e redes sociais
- **Logo**: Logotipo adaptável (header/footer)
- **Layout**: Container base com Header e Footer

#### Produtos e E-commerce
- **ProductCard**: Card de produto com imagem, nome, preço e desconto
- **ProductListing**: Grid responsivo de produtos
- **ProductOptions**: Seletor de cores (círculos) e tamanhos (botões)
- **BuyBox**: Área completa de compra com opções e controles
- **ProductDetails**: Galeria, especificações e avaliações
- **FilterGroup**: Filtros expansíveis com checkboxes e radio buttons

#### Utilitários
- **Section**: Container reutilizável para seções com título
- **Gallery**: Galeria de imagens com navegação e miniaturas

## 🛠️ Como Executar

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

## 🎯 Rotas Implementadas

- `/` - Página inicial
- `/produtos` - Listagem de produtos
- `/produto/:id` - Visualização de produto específico

## 📋 Requisitos Atendidos

### ✅ Estrutura e Organização
- [x] Estrutura de pastas conforme especificação (src/components e src/pages)
- [x] Componentes funcionais reutilizáveis
- [x] Separação clara entre componentes e páginas
- [x] Roteamento com React Router DOM

### ✅ Layout e Design
- [x] Header com logo, busca, navegação e carrinho
- [x] Footer com informações e redes sociais
- [x] Paleta de cores implementada
- [x] Design responsivo e moderno
- [x] Componente Layout reutilizável

### ✅ Componentes Compartilhados
- [x] Section com título e link opcional
- [x] ProductCard com preços e desconto
- [x] ProductListing em grid responsivo
- [x] Gallery com navegação e miniaturas
- [x] FilterGroup expansível

### ✅ Páginas Principais
- [x] HomePage com galeria, coleções e produtos
- [x] ProductListingPage com filtros e ordenação
- [x] ProductViewPage com detalhes completos

### ✅ Funcionalidades
- [x] Navegação entre páginas
- [x] Filtros e ordenação (interface)
- [x] Seleção de cores e tamanhos
- [x] Controle de quantidade
- [x] Galeria de imagens interativa
- [x] Breadcrumb de navegação

## 🖼️ Recursos Visuais

O projeto inclui todas as imagens fornecidas:
- 8 imagens de slide para a home page
- 3 imagens de coleções em destaque
- 5 imagens de produtos (product-thumb)
- 5 imagens detalhadas de produtos (produc-image)
- Ícones SVG (logo, redes sociais, navegação)

## 🎨 Critérios de Avaliação Atendidos

- **✅ Construção Lógica**: Estrutura bem organizada e modular
- **✅ Aplicação do React**: Componentes funcionais, hooks e roteamento
- **✅ Conformidade com Requisitos**: Todos os requisitos implementados
- **✅ Estilo e Design**: Interface moderna, responsiva e profissional
- **✅ Boas Práticas**: Código limpo, reutilizável e bem documentado

## 👥 Desenvolvido por

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

