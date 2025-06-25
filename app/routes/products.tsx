import ProductsPage from '~/ui/productsPage/ProductsPage';
import { useQuery } from '@tanstack/react-query';
import type { Route } from './+types/products';

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

// Fetch products function
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export default function Products() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return (
      <div className='error-message'>
        {(error as Error).message ||
          'Failed to load products. Please try again later.'}
      </div>
    );
  }

  return <ProductsPage products={products} />;
}
