import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Calendar } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div 
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="text-center text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif">Oresto</h1>
          <p className="text-xl md:text-2xl">Cuisine française authentique</p>
          <Link 
            to="/booking"
            className="inline-block bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition"
          >
            Réserver une table
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <ChefHat className="mx-auto text-amber-900" size={40} />
            <h3 className="text-xl font-semibold">Cuisine Raffinée</h3>
            <p className="text-gray-600">Des plats préparés avec passion par nos chefs expérimentés</p>
          </div>
          <div className="text-center space-y-4">
            <Utensils className="mx-auto text-amber-900" size={40} />
            <h3 className="text-xl font-semibold">Service Traiteur</h3>
            <p className="text-gray-600">Pour vos événements privés et professionnels</p>
          </div>
          <div className="text-center space-y-4">
            <Calendar className="mx-auto text-amber-900" size={40} />
            <h3 className="text-xl font-semibold">Événements</h3>
            <p className="text-gray-600">Organisation sur mesure de vos célébrations</p>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Nos Offres Spéciales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Menu du jour"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Menu du Jour</h3>
                <p className="text-gray-600 mb-4">Entrée + Plat + Dessert</p>
                <p className="text-2xl font-bold text-amber-900">29€</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Brunch"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Brunch du Weekend</h3>
                <p className="text-gray-600 mb-4">Formule complète avec boissons</p>
                <p className="text-2xl font-bold text-amber-900">35€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;