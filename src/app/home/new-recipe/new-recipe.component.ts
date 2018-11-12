import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

import { Recipe } from "src/app/models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";
import { Preparation } from "src/app/models/preparation.model";
import { RecipeService } from "src/app/services/recipe.service";

@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.scss"],
  animations: [
    trigger("filterAnimation", [
      transition("void => *", [style({ transform: "scale(0)" }), animate(100)]),
      transition("* => void", [animate(100, style({ transform: "scale(0)" }))])
    ])
  ]
})
export class NewRecipeComponent implements OnInit {
  public recipe = new Recipe();
  public ingredients = new Array<Ingredient>({
    id: 0,
    name: "",
    qtd: "",
    recipe_id: 0
  });
  public preparation = new Preparation();

  constructor(private recipeService: RecipeService) {
    this.recipe.category = "0";
  }

  ngOnInit() {}

  public addIngredient() {
    this.ingredients.push({ id: 0, name: "", qtd: "", recipe_id: 0 });
  }

  public removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  public onSubmit() {
    this.recipeService.newRecipe(this.recipe).subscribe(res => {
      this.recipeService.newIngredients(res.id, this.ingredients);
      this.recipeService.newPreparation(res.id, this.preparation);
    });
  }
}
