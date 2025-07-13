import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, RefreshCw, Star, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About KITA DIGITAL</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for quality smartphones, tablets, and tech accessories in Nigeria
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                KITA DIGITAL is a registered Nigerian tech retail brand providing high-quality phones and gadgets to customers nationwide. We are legally recognized to offer computer-based services and general merchandise, with a specialization in digital products.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                We're committed to affordability, originality, fast delivery, and excellent customer experience — every time you shop with us.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To provide Nigerians with access to genuine, high-quality tech products at competitive prices, backed by exceptional customer service and reliable delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                We only stock genuine products from trusted manufacturers, ensuring you get the best quality every time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Free Lagos delivery on orders ₦250,000+ with nationwide shipping to get your products to you quickly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                5-day return/exchange policy for eligible items, giving you peace of mind with your purchase.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Exceptional customer service is our priority. We're here to help you find the perfect tech solution.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                Supporting the Nigerian tech community by providing access to quality products and reliable service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">
                Registered business with legal recognition, building trust through transparency and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose KITA DIGITAL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Genuine Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">Free</div>
              <div className="text-gray-600">Lagos Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">5 Days</div>
              <div className="text-gray-600">Return Policy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Shop?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover our wide range of smartphones, tablets, and accessories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 