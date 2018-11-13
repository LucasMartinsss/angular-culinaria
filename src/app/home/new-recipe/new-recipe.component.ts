import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { Router } from "@angular/router";

import { Recipe } from "src/app/models/recipe.model";
import { Ingredient } from "src/app/models/ingredient.model";
import { Preparation } from "src/app/models/preparation.model";
import { RecipeService } from "src/app/services/recipe.service";
import { Constants } from "src/app/utils/constants";

@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.scss"],
  animations: [
    trigger("filterAnimation", [
      transition("void => *", [style({ transform: "scale(0)" }), animate(100)]),
      transition("* => void", [animate(100, style({ transform: "scale(0)" }))])
    ]),
    trigger("messageAnimation", [
      transition("void => *", [
        style({ height: "0", paddingTop: 0, paddingBottom: 0, opacity: 0 }),
        animate(200)
      ]),
      transition("* => void", [
        animate(
          200,
          style({ height: "0", paddingTop: 0, paddingBottom: 0, opacity: 0 })
        )
      ])
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
  public isSuccess = true;
  public message = "";

  constructor(private recipeService: RecipeService, private router: Router) {
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
    if (!this.recipe.name) {
      this.isSuccess = false;
      this.message =
        Constants.messageDanger + " Favor digite um nome para a receita.";
      setTimeout(() => {
        this.message = "";
      }, 3000);
    }
    this.recipeService.newRecipe(this.recipe).subscribe(res => {
      this.recipeService
        .newIngredients(res.id, this.ingredients)
        .subscribe(dataIng => {});
      this.recipeService
        .newPreparation(res.id, this.preparation)
        .subscribe(dataPrep => {
          this.isSuccess = true;
          this.message = Constants.messageSuccess;
          setTimeout(() => {
            // this.router.navigate(["/home/detail", res.id]);
            this.message = "";
          }, 3000);
        });
    });
  }
}
