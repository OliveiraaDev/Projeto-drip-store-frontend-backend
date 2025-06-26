import React from 'react';
import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import Gallery from '../../components/Gallery/Gallery';
import { mockProducts, homeSlideImages, collectionsData } from '../../data/mockData';

const HomePage = () => {
  const featuredProducts = mockProducts.slice(0, 8);

  return (
    <Layout>
      {/* Slide de imagens */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <Gallery 
            images={homeSlideImages}
            width="1440"
            height="681"
            radius="4px"
          />
        </div>
      </section>

      {/* Coleções em destaque */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collectionsData.map((collection) => (
            <div key={collection.id} className="relative group cursor-pointer">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-64 object-cover rounded-lg"
                style={{ borderRadius: '4px' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-end p-6">
                <div className="text-drip-white">
                  <span className="text-sm font-semibold bg-drip-warning px-2 py-1 rounded">
                    {collection.discount}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{collection.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Produtos em alta */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={featuredProducts} />
      </Section>
    </Layout>
  );
};

export default HomePage;

