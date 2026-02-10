import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Power of <span className="text-yellow-300">Nature</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Lucky Aura brings you premium organic skincare & haircare products
            made with botanical ingredients to nourish, protect, and enhance
            your natural beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>

            <Link to="/products">
              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Lucky Aura?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white text-xl">
                🌿
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Natural Ingredients</h3>
              <p className="text-gray-600">
                Crafted with herbs, essential oils, and plant extracts inspired
                by Ayurveda and traditional skincare practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4 text-white text-xl">
                🧴
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe for Skin & Hair</h3>
              <p className="text-gray-600">
                Free from parabens, sulphates, and harsh chemicals. Suitable for
                all skin and hair types.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mb-4 text-white text-xl">
                ✨
              </div>
              <h3 className="text-xl font-semibold mb-3">Visible Results</h3>
              <p className="text-gray-600">
                From glowing skin to stronger hair, experience noticeable
                results with regular use.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCT CATEGORIES ================= */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Product Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "Face Wash",
              "Face Serums",
              "Creams & Gels",
              "Hair Care",
              "Lip Care",
              "Soaps",
              "Sunscreen",
              "Scrubs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 text-center hover:bg-green-100 transition cursor-pointer"
              >
                <h3 className="font-semibold text-lg text-gray-800">{item}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= ABOUT BRAND ================= */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            About Lucky Aura
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Lucky Aura is an organic skincare & haircare brand committed to
            purity, quality, and nature-powered beauty. Every product is
            carefully formulated using botanical ingredients to restore and
            maintain healthy skin and hair.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            We believe true beauty comes from nature. That’s why our products
            are cruelty-free, thoughtfully crafted, and designed for everyday
            use without compromising on safety or effectiveness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Natural Formulations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">0%</div>
              <div className="text-gray-600">Harsh Chemicals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-600">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Glow Naturally with Lucky Aura
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Explore our organic range of face washes, serums, creams, hair oils,
            shampoos, and more — crafted with love and nature.
          </p>
          <Link to="/products">
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold text-lg transition">
            View All Products
          </button></Link>
        </div>
      </section>

    </div>
  );
};

export default Home;