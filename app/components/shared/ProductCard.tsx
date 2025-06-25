import { Link } from 'react-router';
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
interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
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
        <Link to={`/products/${product.id}`} className='hover:text-[#65358A]'>
          <h2
            className='font-medium text-base truncate text-center hover:text-[#65358A] transition-colors duration-200'
            style={{ color: '#222222' }}>
            {product.name}
          </h2>
        </Link>
        <p className='text-sm text-gray-600 text-center'>
          {product.product_subtitle}
        </p>
        <p className='font-bold text-center'>{product.price} ﷼</p>

        <button className='w-full bg-[#4C4C4C] text-white py-[8px] px-[8px] rounded-[18px] hover:opacity-90 transition-opacity mt-1 text-base'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
