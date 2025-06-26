import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import BuyBox from '../../components/BuyBox/BuyBox';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { mockProducts } from '../../data/mockData';

const ProductViewPage = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));
  const relatedProducts = mockProducts.filter(p => p.id !== parseInt(id)).slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-drip-dark-gray-2 mb-4">Produto não encontrado</h1>
            <a href="/produtos" className="text-drip-primary hover:underline">
              Voltar para produtos
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-drip-light-gray hover:text-drip-primary">Home</a></li>
            <li className="text-drip-light-gray">/</li>
            <li><a href="/produtos" className="text-drip-light-gray hover:text-drip-primary">Produtos</a></li>
            <li className="text-drip-light-gray">/</li>
            <li><a href={`/produtos?categoria=${product.category?.toLowerCase()}`} className="text-drip-light-gray hover:text-drip-primary">{product.category}</a></li>
            <li className="text-drip-light-gray">/</li>
            <li className="text-drip-dark-gray-2 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Detalhes do produto (2 colunas) */}
          <div className="lg:col-span-2">
            <ProductDetails product={product} />
          </div>

          {/* BuyBox (1 coluna) */}
          <div className="lg:col-span-1">
            <BuyBox product={product} />
          </div>
        </div>

        {/* Produtos relacionados */}
        <Section title="Produtos relacionados" titleAlign="left">
          <ProductListing products={relatedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;

