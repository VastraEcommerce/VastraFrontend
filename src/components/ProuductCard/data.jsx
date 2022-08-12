import React from 'react';
import { useGetAllProductsQuery } from '../../services/productApi';
import ProductCard from './ProductCard';

export default function DataProduct() {
  const { data } = useGetAllProductsQuery();
  return (
    <div>
      {data.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
