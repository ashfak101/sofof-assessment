import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ProductDetailPage from '~/ui/productDetailPage/ProductDetailPage';
import type { Route } from './+types/product-detail';
import { useQuery } from '@tanstack/react-query';

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
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Products ' },
    {
      name: 'description',
      content: 'Browse our range of products for Ramadan and Hajj',
    },
  ];
}
const fetchProductById = async (productId: string | undefined) => {
  if (!productId) throw new Error('No product ID provided');
  const response = await fetch('/products.json');
  if (!response.ok) throw new Error('Failed to fetch products');
  const products = await response.json();

  const foundProduct = products.find(
    (p: Product) => p.id === parseInt(productId)
  );

  if (!foundProduct) throw new Error('Product not found');
  return foundProduct;
};
export default function ProductDetail() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });



  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-64'>
        Loading product details...
      </div>
    );
  }

    console.log('Product error:', error);
  if (error ) {
    return (
      <div className='text-red-500 text-center p-4'>
        {error
          ? error instanceof Error
            ? error.message
            : String(error)
          : 'Product not found'}
      </div>
    );
  }

  return <ProductDetailPage product={product} />;
}
