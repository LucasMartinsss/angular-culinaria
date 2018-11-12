import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Ingredient } from "../models/ingredient.model";
import { Preparation } from "../models/preparation.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private headers: Headers;
  private readonly urlAPI = environment.API + "recipe";

  constructor(private http: HttpClient) {
    this.setHeaders();
  }

  private setHeaders() {
    this.headers = new Headers();
    this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers.append(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    this.headers.append(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE"
    );
  }

  getRecipes() {
    return this.http.get<Recipe[]>(this.urlAPI);
    // return this.http.get<Recipe[]>(
    //   "https://jsonplaceholder.typicode.com/posts/42"
    // );
    // const recipes = [
    //   {
    //     id: 2,
    //     name: "string",
    //     portions: 4,
    //     calories: "string",
    //     details: "string",
    //     category: "0",
    //     preparation: {
    //       id: 1,
    //       text: "preparation1",
    //       recipe_id: 2
    //     },
    //     ingredients: [
    //       { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
    //       { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     name: "teste",
    //     portions: 4,
    //     calories: "string",
    //     details: "string",
    //     category: "2",
    //     preparation: {
    //       id: 1,
    //       text: "preparation1",
    //       recipe_id: 2
    //     },
    //     ingredients: [
    //       { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
    //       { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
    //     ]
    //   }
    // ];

    // return recipes;
  }
  getRecipeById(id: number) {
    return this.http.get<Recipe>(this.urlAPI + "/" + id);
    // const recipe = {
    //   id: 2,
    //   name: "teste",
    //   portions: 4,
    //   calories: "string",
    //   details: "string",
    //   category: "2",
    //   preparation: {
    //     id: 1,
    //     text:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     recipe_id: 2
    //   },
    //   ingredients: [
    //     { id: 1, name: "ingredient1", qtd: "150g", recipe_id: 2 },
    //     { id: 2, name: "ingredient2", qtd: "150g", recipe_id: 2 }
    //   ]
    // };
    // return recipe;
  }

  newRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.urlAPI, recipe);
  }

  newIngredients(idRecipe: number, ingredients: Ingredient[]) {
    const params = "/" + idRecipe + "/ingredients";
    return this.http.post<Recipe>(this.urlAPI + params, ingredients);
  }

  newPreparation(idRecipe: number, preparation: Preparation) {
    const params = "/" + idRecipe + "/preparation";
    return this.http.post<Recipe>(this.urlAPI + params, preparation);
  }
}
