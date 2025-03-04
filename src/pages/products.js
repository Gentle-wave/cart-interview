// import { useEffect, useState } from 'react';
// import ProductCard from '../components/ProductCard';
import ProductLayoutOne from '../components/product/ProductLayoutOne';
import { useLoaderData } from 'react-router-dom';

export default function Products() {
  const { products } = useLoaderData()

  return (
    <div>
      <div className="container mx-auto mt-10 min-h-[90vh] px-6 sm:px-10 lg:px-16 mb-16 ">
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {products.map((product) => (
            <ProductLayoutOne key={product.id} product={product} />
          ))}

          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
