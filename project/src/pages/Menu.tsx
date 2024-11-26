import React, { useState } from 'react';
import DishCard from '../components/menu/DishCard';
import { Category, Dish } from '../types/menu';

// Sample data - In a real app, this would come from an API
const categories: Category[] = [
  {
    id: 'entrees',
    name: 'Entrées',
    description: 'Pour commencer en douceur',
  },
  {
    id: 'plats',
    name: 'Plats',
    description: 'Nos spécialités principales',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Pour finir en beauté',
  },
];

export const dishes: Dish[] = [
  {
    id: '1',
    name: 'Soupe à l\'Oignon',
    description: 'Soupe traditionnelle à l\'oignon gratinée au fromage',
    price: 12,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'entrees',
    allergens: ['Gluten', 'Lait'],
    ingredients: [
      { id: '1', name: 'Oignons', removable: false },
      { id: '2', name: 'Fromage', removable: true },
      { id: '3', name: 'Croûtons', removable: true },
    ],
    customizable: true,
  },
  {
    id: '2',
    name: 'Coq au Vin',
    description: 'Coq mijoté au vin rouge avec légumes de saison',
    price: 28,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'plats',
    allergens: ['Sulfites'],
    ingredients: [
      { id: '4', name: 'Poulet', removable: false },
      { id: '5', name: 'Champignons', removable: true },
      { id: '6', name: 'Lardons', removable: true },
    ],
    customizable: true,
  },
  {
    id: '3',
    name: 'Crème Brûlée',
    description: 'Crème vanille avec caramel croustillant',
    price: 10,
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'desserts',
    allergens: ['Œufs', 'Lait'],
    ingredients: [
      { id: '7', name: 'Crème', removable: false },
      { id: '8', name: 'Vanille', removable: false },
    ],
    customizable: false,
  },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('entrees');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-4">Notre Carte</h1>
      <p className="text-gray-600 text-center mb-12">
        Découvrez notre sélection de plats traditionnels français
      </p>

      {/* Category Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-amber-900 text-white'
                  : 'text-gray-700 hover:text-amber-900'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Description */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-serif mb-2">
          {categories.find((c) => c.id === selectedCategory)?.name}
        </h2>
        <p className="text-gray-600">
          {categories.find((c) => c.id === selectedCategory)?.description}
        </p>
      </div>

      {/* Dishes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes
          .filter((dish) => dish.category === selectedCategory)
          .map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
      </div>
    </div>
  );
}

export default Menu;