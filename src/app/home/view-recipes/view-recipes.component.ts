import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { Router } from "@angular/router";

import { RecipeService } from "src/app/services/recipe.service";
import { Recipe } from "src/app/models/recipe.model";
import { Constants } from "src/app/utils/constants";

@Component({
  selector: "app-view-recipes",
  templateUrl: "./view-recipes.component.html",
  styleUrls: ["./view-recipes.component.scss"],
  animations: [
    trigger("filterAnimation", [
      transition("void => *", [
        style({ transform: "scale(0)" }),
        animate("300ms 300ms ease-out")
      ]),
      transition("* => void", [
        animate("300ms ease-out", style({ transform: "scale(0)" }))
      ])
    ])
  ]
})
export class ViewRecipesComponent implements OnInit {
  public recipes: Recipe[] = [];
  public allRecipes: Recipe[] = [];
  public categories = Constants.categories;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.getRecipes();
  }

  ngOnInit() {}

  getRecipes() {
    this.recipes = this.recipeService.getRecipes();
    this.allRecipes = this.recipeService.getRecipes();
  }
  setCategory(event) {
    const value = event.target.value;
    if (value === "5") {
      this.recipes = this.allRecipes;
    } else {
      this.recipes = this.allRecipes.filter(item => item.category === value);
    }
  }
  openDetails(id) {
    this.router.navigate(["/home/detail", id]);
  }
}
