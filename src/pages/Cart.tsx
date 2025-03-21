import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Cart() {
  // TODO: Implement cart state management
  const cartItems: any[] = [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <ShoppingCart className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <a
              href="/models"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Browse Models
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cart items will be rendered here */}
            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-indigo-600">$0.00</span>
              </div>
              <button
                className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={() => {/* TODO: Implement checkout */}}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}