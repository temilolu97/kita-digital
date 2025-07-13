import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 8);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to{' '}
                <span className="text-yellow-300">KITA Digital</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Your go-to store for quality smartphones, tablets, accessories, and the latest tech gadgets at unbeatable prices.
              </p>
              <p className="text-lg text-blue-200 font-semibold">
                Smart Tech. Trusted Source. Delivered Nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {products.slice(0, 4).map((product) => (
                      <div key={product.id} className="text-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose KITA Digital?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to affordability, originality, fast delivery, and excellent customer experience — every time you shop with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Warranty Backed
              </h3>
              <p className="text-gray-600">
                All products come with manufacturer warranty for your peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Free Delivery
              </h3>
              <p className="text-gray-600">
                Free Lagos delivery on orders ₦250,000+ with nationwide shipping.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Returns
              </h3>
              <p className="text-gray-600">
                5-day return/exchange for eligible items in original condition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                Only genuine products from trusted manufacturers and suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  KITA DIGITAL is a registered Nigerian tech retail brand providing high-quality phones and gadgets to customers nationwide. We are legally recognized to offer computer-based services and general merchandise, with a specialization in digital products.
                </p>
                <p>
                  We're committed to affordability, originality, fast delivery, and excellent customer experience — every time you shop with us.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Affordable prices on all products
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Original and genuine products only
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Fast and reliable delivery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Excellent customer support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Discover our most popular smartphones, tablets, and accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 