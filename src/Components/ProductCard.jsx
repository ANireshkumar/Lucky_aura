import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductCard = ({ products }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
        >
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              {product.badge}
            </div>
          )}

          {/* Product Image */}
          <div className="relative h-64 bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-yellow-500 text-sm">★ {product.rating}</span>
              <span className="text-gray-500 text-xs ml-2">({Math.floor(Math.random() * 100) + 50} reviews)</span>
            </div>

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-700">₹{product.price}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;