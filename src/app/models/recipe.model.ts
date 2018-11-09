import { Ingredient } from "./ingredient.model";
import { Preparation } from "./preparation.model";

export class Recipe {
  id: number;
  name: string;
  portions: number;
  calories: string;
  details: string;
  preparation: Preparation;
  ingredients: Ingredient[];
  category: string;
}
