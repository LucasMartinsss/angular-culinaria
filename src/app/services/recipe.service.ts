import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Ingredient } from "../models/ingredient.model";
import { Preparation } from "../models/preparation.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private readonly urlAPI = environment.API + "recipe";

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>(this.urlAPI);
  }
  getRecipeById(id: number) {
    return this.http.get<Recipe>(this.urlAPI + "/" + id);
  }

  newRecipe(recipe: Recipe) {
    return this.http.post<Recipe>(this.urlAPI, recipe);
  }

  newIngredients(idRecipe: number, ingredients: Ingredient[]) {
    const params = "/" + idRecipe + "/ingredients";
    return this.http.post<Ingredient[]>(this.urlAPI + params, ingredients);
  }

  newPreparation(idRecipe: number, preparation: Preparation) {
    const params = "/" + idRecipe + "/preparation";
    return this.http.post<Preparation>(this.urlAPI + params, preparation);
  }
}
