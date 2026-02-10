import React from "react";

const ProductCard = ({ products, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products?.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-3xl border border-green-200/60 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
        >
          {/* Image */}
          <div className="relative h-60 bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badge */}
            <span className="absolute top-4 right-4 bg-green-700 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            <p className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h3 className="text-lg font-bold text-gray-800 leading-snug mb-2">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-5 line-clamp-2">
              {product.description}
            </p>

            {/* Rating + Price */}
            <div className="flex items-center justify-between mb-5">
              <span className="flex items-center gap-1 text-green-700 font-semibold text-sm">
                ⭐ {product.rating}
              </span>
              <span className="text-xl font-bold text-green-900">
                ₹{product.price}
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white py-3 rounded-2xl font-semibold tracking-wide transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
