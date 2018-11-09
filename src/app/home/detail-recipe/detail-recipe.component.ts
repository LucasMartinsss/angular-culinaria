import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";
import { Recipe } from "src/app/models/recipe.model";
import { ActivatedRoute } from "@angular/router";
import { Constants } from "src/app/utils/constants";

@Component({
  selector: "app-detail-recipe",
  templateUrl: "./detail-recipe.component.html",
  styleUrls: ["./detail-recipe.component.scss"]
})
export class DetailRecipeComponent implements OnInit {
  public recipe = new Recipe();
  public categories = Constants.categories;
  private subParams: any;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subParams = this.route.params.subscribe(params => {
      this.getRecipe(+params["id"]);
    });
  }

  getRecipe(id) {
    console.log(id);
    this.recipe = this.recipeService.getRecipeById(id);
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
