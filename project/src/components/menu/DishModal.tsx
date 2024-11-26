import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dish, Ingredient } from '../../types/menu';

interface DishModalProps {
  dish: Dish;
  isOpen: boolean;
  onClose: () => void;
}

function DishModal({ dish, isOpen, onClose }: DishModalProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    dish.ingredients.map(i => i.id)
  );

  if (!isOpen) return null;

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredientId)
        ? prev.filter(id => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const calculateTotal = () => {
    const basePrice = dish.price;
    const ingredientsPrice = dish.ingredients
      .filter(i => i.price && selectedIngredients.includes(i.id))
      .reduce((sum, i) => sum + (i.price || 0), 0);
    return basePrice + ingredientsPrice;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-semibold">{dish.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{dish.description}</p>
            </div>

            {dish.customizable && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Ingrédients</h3>
                <div className="space-y-2">
                  {dish.ingredients.map(ingredient => (
                    <div
                      key={ingredient.id}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedIngredients.includes(ingredient.id)}
                          onChange={() => toggleIngredient(ingredient.id)}
                          disabled={!ingredient.removable}
                          className="rounded text-amber-900 focus:ring-amber-900"
                        />
                        <span>{ingredient.name}</span>
                      </label>
                      {ingredient.price && (
                        <span className="text-gray-600">+{ingredient.price}€</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-2">Allergènes</h3>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map(allergen => (
                  <span
                    key={allergen}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold text-amber-900">
                  {calculateTotal()}€
                </span>
              </div>
              <button
                className="w-full bg-amber-900 text-white py-3 rounded-full hover:bg-amber-800 transition"
                onClick={onClose}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishModal;