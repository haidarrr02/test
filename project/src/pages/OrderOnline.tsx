import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, Truck, Clock, MapPin } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import DishCard from '../components/menu/DishCard';
import Cart from '../components/order/Cart';
import { dishes } from './Menu'; // In real app, this would come from an API

function OrderOnline() {
  const [searchParams] = useSearchParams();
  const { orderType, setOrderType } = useCartStore();

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'delivery' || type === 'takeout') {
      setOrderType(type);
    }
  }, [searchParams, setOrderType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Commander en Ligne</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Savourez nos plats chez vous ou à emporter
        </p>
      </div>

      {/* Order Type Selection */}
      {!orderType && (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <button
            onClick={() => setOrderType('takeout')}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition text-center"
          >
            <ShoppingBag className="mx-auto text-amber-900 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">À Emporter</h3>
            <p className="text-gray-600">Récupérez votre commande au restaurant</p>
          </button>
          <button
            onClick={() => setOrderType('delivery')}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition text-center"
          >
            <Truck className="mx-auto text-amber-900 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Livraison</h3>
            <p className="text-gray-600">Livraison à domicile sous 45 minutes</p>
          </button>
        </div>
      )}

      {orderType && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {orderType === 'takeout' ? (
                    <ShoppingBag className="text-amber-900" size={24} />
                  ) : (
                    <Truck className="text-amber-900" size={24} />
                  )}
                  <h2 className="text-xl font-semibold">
                    {orderType === 'takeout' ? 'À Emporter' : 'Livraison'}
                  </h2>
                </div>
                <button
                  onClick={() => setOrderType(orderType === 'takeout' ? 'delivery' : 'takeout')}
                  className="text-amber-900 hover:text-amber-800"
                >
                  Changer
                </button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{orderType === 'takeout' ? '20-30 min' : '30-45 min'}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>Zone de livraison : 5km</span>
                  </div>
                )}
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderOnline;