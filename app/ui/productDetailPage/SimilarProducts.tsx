import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link, Links } from 'react-router';
import ProductCard from '~/components/shared/ProductCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  product_subtitle: string;
  description: string;
  key_feature: string[];
  feature_image: string;
  image_gallery: string[];
  price: number;
  category: string;
  inStock: boolean;
}

const fetchProducts = async () => {
  const response = await axios.get('/products.json');
  return response.data.slice(0, 4);
};

const SimilarProducts = () => {
  const { data: similarProducts = [], isLoading } = useQuery({
    queryKey: ['similarProducts'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className='mt-12'>
        <p>Loading similar products...</p>
      </div>
    );
  }

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <div className='mt-12'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-medium text-[#222222] '>
          Suggested Similar Products
        </h2>
        <Link
          to={`/products`}
          className='flex items-center gap-2 text-[#616161] text-xl  hover:underline'>
          See all <MdKeyboardArrowRight />
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {similarProducts.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
