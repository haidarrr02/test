import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

function Cart() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Handle checkout process
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
        <h2 className="text-xl font-semibold mb-4">Votre Panier</h2>
        <p className="text-gray-600 text-center py-8">Votre panier est vide</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Votre Panier</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={`${item.dish.id}-${item.selectedIngredients.join()}`} className="flex items-start space-x-4">
            <img
              src={item.dish.image}
              alt={item.dish.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.dish.name}</h3>
              <p className="text-sm text-gray-600">
                {item.selectedIngredients
                  .map((id) => item.dish.ingredients.find((i) => i.id === id)?.name)
                  .join(', ')}
              </p>
              {item.specialInstructions && (
                <p className="text-sm text-gray-600 italic">
                  Note: {item.specialInstructions}
                </p>
              )}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.dish.id, Math.max(0, item.quantity - 1))}
                    className="text-gray-500 hover:text-amber-900"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                    className="text-gray-500 hover:text-amber-900"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.dish.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold">{(item.dish.price * item.quantity).toFixed(2)}€</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Sous-total</span>
          <span>{getTotal().toFixed(2)}€</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Livraison</span>
          <span>Gratuite</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total</span>
          <span>{getTotal().toFixed(2)}€</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition disabled:opacity-50"
        >
          {isCheckingOut ? 'Traitement...' : 'Commander'}
        </button>

        <button
          onClick={clearCart}
          className="w-full text-gray-500 mt-2 hover:text-gray-700"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}

export default Cart;