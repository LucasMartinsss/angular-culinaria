import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

import { Recipe } from "src/app/models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";
import { Preparation } from "src/app/models/preparation.model";

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
  public ingredientsModel = [{ name: "", qtd: "" }];
  public preparation = new Preparation();

  constructor() {
    this.recipe.category = "0";
  }

  ngOnInit() {}

  public addIngredient() {
    this.ingredientsModel.push({ name: "", qtd: "" });
  }

  public removeIngredient(index: number) {
    this.ingredientsModel.splice(index, 1);
  }

  public onSubmit() {}
}
