import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const shippingCost = state.total >= 250000 ? 0 : 5000;
  const totalWithShipping = state.total + shippingCost;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {state.items.length} item{state.items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Cart Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {state.items.map((item) => (
                  <div key={item.product.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.product.description}
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            className="px-3 py-2 text-gray-600 hover:text-gray-800"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                            className="px-3 py-2 text-gray-600 hover:text-gray-800"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item Total */}
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-gray-600">Item Total:</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({state.items.length} items)</span>
                  <span className="text-gray-900">{formatPrice(state.total)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">
                    {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                  </span>
                </div>
                
                {shippingCost > 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                    Add ₦{formatPrice(250000 - state.total)} more for free shipping!
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(totalWithShipping)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
                <Link
                  to="/products"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block text-center"
                >
                  Continue Shopping
                </Link>
              </div>
              
              {/* Shipping Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Shipping Information</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Free Lagos delivery on orders ₦250,000+</li>
                  <li>• Nationwide shipping available</li>
                  <li>• 2-5 business days delivery</li>
                  <li>• Secure packaging guaranteed</li>
                </ul>
              </div>
              
              {/* Payment Methods */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Methods</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Bank transfer</span>
                  <span>•</span>
                  <span>Debit card</span>
                  <span>•</span>
                  <span>Pay on delivery (Lagos only)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would typically show recommended products based on cart items */}
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 mb-2">Recommended Product</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">₦0</p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 