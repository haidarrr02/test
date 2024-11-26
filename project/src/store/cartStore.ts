import { create } from 'zustand';
import { Dish } from '../types/menu';

interface CartItem {
  dish: Dish;
  quantity: number;
  specialInstructions?: string;
  selectedIngredients: string[];
}

interface CartStore {
  items: CartItem[];
  orderType: 'delivery' | 'takeout' | null;
  addItem: (item: CartItem) => void;
  removeItem: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  setOrderType: (type: 'delivery' | 'takeout') => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  orderType: null,
  
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.dish.id === item.dish.id &&
        JSON.stringify(i.selectedIngredients) === JSON.stringify(item.selectedIngredients)
      );

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i === existingItem
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }

      return { items: [...state.items, item] };
    });
  },

  removeItem: (dishId) => {
    set((state) => ({
      items: state.items.filter((item) => item.dish.id !== dishId),
    }));
  },

  updateQuantity: (dishId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      ),
    }));
  },

  setOrderType: (type) => {
    set({ orderType: type });
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => {
      const itemTotal = item.dish.price * item.quantity;
      const ingredientsTotal = item.dish.ingredients
        .filter((i) => i.price && item.selectedIngredients.includes(i.id))
        .reduce((sum, i) => sum + (i.price || 0), 0);
      return total + (itemTotal + ingredientsTotal) * item.quantity;
    }, 0);
  },
}));