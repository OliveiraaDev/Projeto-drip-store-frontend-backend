import React, { useState } from 'react';
import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { mockProducts, mockFilters } from '../../data/mockData';

const ProductListingPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [sortBy, setSortBy] = useState('relevance');

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    
    let sorted = [...filteredProducts];
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price));
        break;
      case 'price-high':
        sorted.sort((a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price));
        break;
      case 'popularity':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // relevance - manter ordem original
        break;
    }
    setFilteredProducts(sorted);
  };

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
            <li className="text-drip-dark-gray-2 font-medium">Tênis</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de filtros */}
          <div className="lg:col-span-1">
            <div className="bg-drip-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-drip-dark-gray-2 mb-6">Filtrar por</h2>
              
              <FilterGroup 
                title="Marca" 
                options={mockFilters.marca} 
                type="checkbox"
              />
              
              <FilterGroup 
                title="Categoria" 
                options={mockFilters.categoria} 
                type="checkbox"
              />
              
              <FilterGroup 
                title="Gênero" 
                options={mockFilters.genero} 
                type="radio"
              />
              
              <FilterGroup 
                title="Estado" 
                options={mockFilters.estado} 
                type="radio"
              />
            </div>
          </div>

          {/* Área principal de produtos */}
          <div className="lg:col-span-3">
            {/* Header com ordenação */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-drip-dark-gray-2">Resultados para "Tênis"</h1>
                <p className="text-drip-light-gray mt-1">{filteredProducts.length} produtos encontrados</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <label className="text-drip-dark-gray-3">Ordenar por:</label>
                <select 
                  value={sortBy}
                  onChange={handleSortChange}
                  className="border border-drip-light-gray-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-drip-primary"
                >
                  <option value="relevance">Mais relevantes</option>
                  <option value="price-low">Menor preço</option>
                  <option value="price-high">Maior preço</option>
                  <option value="popularity">Mais populares</option>
                </select>
              </div>
            </div>

            {/* Lista de produtos */}
            <ProductListing products={filteredProducts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;

