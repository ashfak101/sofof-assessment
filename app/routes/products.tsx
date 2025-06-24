import type { Route } from '../+types/root';
import { useEffect, useState } from 'react';

// Define Product type
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

// Loader function for React Router 7
export async function loader() {
  try {
    const response = await fetch('/products.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    return { products };
  } catch (error) {
    console.error('Error loading products:', error);
    return { products: [] };
  }
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div className='w-full max-w-[712px] px-4 sm:px-4 mx-auto'>
      <h1 className='text-2xl md:text-3xl font-bold my-6 text-center'>
        Our Products
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-[#F5F2F8] p-2 rounded-xl mb-2 shadow-sm hover:shadow-md transition-shadow'>
            <div className='bg-white p-2 rounded-[16px]'>
              <img
                src={product.feature_image}
                alt={product.name}
                className='w-full h-auto rounded-lg  object-cover '
              />
            </div>
            <div className='space-y-2'>
              <h2
                className='font-medium text-base truncate text-center'
                style={{ color: '#222222' }}>
                {product.name}
              </h2>
              <p className='text-sm text-gray-600 text-center'>
                {product.product_subtitle}
              </p>
              <p className='font-bold text-center'>{product.price} ﷼</p>

              <button
                className='w-full bg-[#4C4C4C] text-white py-[8px] px-[8px] rounded-full hover:opacity-90 transition-opacity mt-1'
                disabled={!product.inStock}>
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
