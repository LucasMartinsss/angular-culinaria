import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private headers: Headers;

  constructor() {
    this.setHeaders();
  }

  private setHeaders() {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  getRecipes(): any[] {
    const recipes = [
      {
        id: 2,
        name: "string",
        portions: 4,
        calories: "string",
        details: "string",
        category: "0",
        preparation: {
          id: 1,
          text: "preparation1",
          recipe_id: 2
        },
        ingredients: [
          { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
          { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
        ]
      },
      {
        id: 2,
        name: "teste",
        portions: 4,
        calories: "string",
        details: "string",
        category: "2",
        preparation: {
          id: 1,
          text: "preparation1",
          recipe_id: 2
        },
        ingredients: [
          { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
          { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
        ]
      }
    ];

    return recipes;
  }
  getRecipeById(id: number): any {
    const recipe = {
      id: 2,
      name: "teste",
      portions: 4,
      calories: "string",
      details: "string",
      category: "2",
      preparation: {
        id: 1,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        recipe_id: 2
      },
      ingredients: [
        { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
        { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
      ]
    };
    return recipe;
  }
}
