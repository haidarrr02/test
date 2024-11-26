export interface Allergen {
  id: string;
  name: string;
  icon: string;
}

export interface Ingredient {
  id: string;
  name: string;
  removable: boolean;
  price?: number;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  allergens: string[];
  ingredients: Ingredient[];
  customizable: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}