// Mock data atualizado com imagens reais
export const mockProducts = [
  {
    id: 1,
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    image: '/product-thumb-1.jpeg',
    price: 219.00,
    priceDiscount: 149.90,
    category: 'Tênis',
    rating: 4.7,
    description: 'O Nike Revolution 6 Next Nature é um tênis de corrida que oferece conforto e sustentabilidade. Feito com pelo menos 20% de material reciclado em peso.',
    colors: [
      { id: 1, label: 'Preto', value: '#000000' },
      { id: 2, label: 'Branco', value: '#FFFFFF' },
      { id: 3, label: 'Azul', value: '#0066CC' },
    ],
    sizes: [
      { id: 1, label: '39' },
      { id: 2, label: '40' },
      { id: 3, label: '41' },
      { id: 4, label: '42' },
      { id: 5, label: '43' },
    ],
    images: [
      '/produc-image-1.jpeg',
      '/produc-image-2.jpeg',
      '/produc-image-3.jpeg',
    ],
    specifications: {
      'Material': 'Sintético e tecido',
      'Solado': 'Borracha',
      'Tipo': 'Corrida',
      'Gênero': 'Masculino',
    },
    reviews: [
      {
        author: 'João Silva',
        rating: 5,
        comment: 'Excelente tênis, muito confortável para corrida.',
      },
      {
        author: 'Maria Santos',
        rating: 4,
        comment: 'Boa qualidade, recomendo!',
      },
    ],
  },
  {
    id: 2,
    name: 'Camiseta Adidas Essentials 3-Stripes',
    image: '/product-thumb-2.jpeg',
    price: 89.90,
    priceDiscount: 59.90,
    category: 'Camisetas',
    rating: 4.5,
    description: 'Camiseta casual da Adidas com as icônicas 3 listras. Feita em algodão macio para uso diário.',
    colors: [
      { id: 1, label: 'Preto', value: '#000000' },
      { id: 2, label: 'Branco', value: '#FFFFFF' },
      { id: 3, label: 'Azul Marinho', value: '#001f3f' },
    ],
    sizes: [
      { id: 1, label: 'P' },
      { id: 2, label: 'M' },
      { id: 3, label: 'G' },
      { id: 4, label: 'GG' },
    ],
    images: [
      '/produc-image-2.jpeg',
      '/produc-image-3.jpeg',
    ],
  },
  {
    id: 3,
    name: 'Calça Jeans Slim Fit',
    image: '/product-thumb-3.jpeg',
    price: 159.90,
    category: 'Calças',
    rating: 4.3,
    description: 'Calça jeans com modelagem slim fit, perfeita para o dia a dia.',
    images: [
      '/produc-image-3.jpeg',
      '/produc-image-4.jpeg',
    ],
  },
  {
    id: 4,
    name: 'Boné Nike Dri-FIT',
    image: '/product-thumb-4.jpeg',
    price: 79.90,
    priceDiscount: 49.90,
    category: 'Bonés',
    rating: 4.6,
    description: 'Boné esportivo com tecnologia Dri-FIT para manter você seco.',
    images: [
      '/produc-image-4.jpeg',
      '/produc-image-5.jpeg',
    ],
  },
  {
    id: 5,
    name: 'Headphone JBL Tune 510BT',
    image: '/product-thumb-5.jpeg',
    price: 199.90,
    priceDiscount: 149.90,
    category: 'Headphones',
    rating: 4.4,
    description: 'Headphone wireless com qualidade de som JBL e bateria de longa duração.',
    images: [
      '/produc-image-5.jpeg',
      '/produc-image-1.jpeg',
    ],
  },
  {
    id: 6,
    name: 'Tênis Adidas Ultraboost 22',
    image: '/product-thumb-1.jpeg',
    price: 899.90,
    priceDiscount: 699.90,
    category: 'Tênis',
    rating: 4.8,
    description: 'Tênis de corrida premium com tecnologia Boost para máximo retorno de energia.',
    images: [
      '/produc-image-1.jpeg',
      '/produc-image-2.jpeg',
    ],
  },
  {
    id: 7,
    name: 'Camiseta Puma Essential Logo',
    image: '/product-thumb-2.jpeg',
    price: 69.90,
    category: 'Camisetas',
    rating: 4.2,
    description: 'Camiseta básica da Puma com logo clássico.',
    images: [
      '/produc-image-2.jpeg',
      '/produc-image-3.jpeg',
    ],
  },
  {
    id: 8,
    name: 'Bermuda Nike Dri-FIT',
    image: '/product-thumb-3.jpeg',
    price: 119.90,
    priceDiscount: 89.90,
    category: 'Bermudas',
    rating: 4.5,
    description: 'Bermuda esportiva ideal para treinos e atividades físicas.',
    images: [
      '/produc-image-3.jpeg',
      '/produc-image-4.jpeg',
    ],
  },
];

export const mockCategories = [
  { id: 1, name: 'Camisetas', image: '/collection-1.png' },
  { id: 2, name: 'Calças', image: '/collection-2.png' },
  { id: 3, name: 'Bonés', image: '/collection-3.png' },
  { id: 4, name: 'Headphones', image: '/collection-1.png' },
  { id: 5, name: 'Tênis', image: '/collection-2.png' },
];

export const mockFilters = {
  marca: [
    { id: 'nike', label: 'Nike', count: 15 },
    { id: 'adidas', label: 'Adidas', count: 12 },
    { id: 'puma', label: 'Puma', count: 8 },
    { id: 'jbl', label: 'JBL', count: 3 },
  ],
  categoria: [
    { id: 'tenis', label: 'Tênis', count: 20 },
    { id: 'camisetas', label: 'Camisetas', count: 15 },
    { id: 'calcas', label: 'Calças', count: 10 },
    { id: 'bones', label: 'Bonés', count: 8 },
    { id: 'headphones', label: 'Headphones', count: 5 },
  ],
  genero: [
    { id: 'masculino', label: 'Masculino', count: 25 },
    { id: 'feminino', label: 'Feminino', count: 20 },
    { id: 'unissex', label: 'Unissex', count: 13 },
  ],
  estado: [
    { id: 'novo', label: 'Novo', count: 45 },
    { id: 'usado', label: 'Usado', count: 13 },
  ],
};

// Dados para a galeria da home page
export const homeSlideImages = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
  { src: '/home-slide-4.jpeg' },
  { src: '/home-slide-5.jpeg' },
  { src: '/home-slide-6.jpeg' },
  { src: '/home-slide-7.jpeg' },
  { src: '/home-slide-8.jpeg' },
];

// Dados para coleções em destaque
export const collectionsData = [
  { id: 1, name: 'Novo drop Supreme', image: '/collection-1.png', discount: '30% OFF' },
  { id: 2, name: 'Coleção Adidas', image: '/collection-2.png', discount: '30% OFF' },
  { id: 3, name: 'Novo Beats Bass', image: '/collection-3.png', discount: '30% OFF' },
];

