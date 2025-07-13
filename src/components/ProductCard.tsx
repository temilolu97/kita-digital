import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { type Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <Link
              to={`/product/${product.id}`}
              className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </Link>
            <button
              onClick={() => addItem(product)}
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          {quantityInCart > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {quantityInCart} in cart
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 