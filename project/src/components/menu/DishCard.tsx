import React, { useState } from 'react';
import { Info, Plus } from 'lucide-react';
import { Dish } from '../../types/menu';
import DishModal from './DishModal';

interface DishCardProps {
  dish: Dish;
}

function DishCard({ dish }: DishCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{dish.name}</h3>
            <span className="text-amber-900 font-bold">{dish.price}€</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-gray-600 hover:text-amber-900 flex items-center gap-1"
            >
              <Info size={18} />
              <span className="text-sm">Détails</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-900 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition flex items-center gap-2"
            >
              <Plus size={18} />
              <span>Ajouter</span>
            </button>
          </div>
        </div>
      </div>

      <DishModal
        dish={dish}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default DishCard;