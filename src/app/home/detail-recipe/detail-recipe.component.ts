import { Component, OnInit } from "@angular/core";
import { RecipeService } from "src/app/services/recipe.service";
import { Recipe } from "src/app/models/recipe.model";
import { ActivatedRoute } from "@angular/router";
import { Constants } from "src/app/utils/constants";
import { Subscription } from "rxjs";

@Component({
  selector: "app-detail-recipe",
  templateUrl: "./detail-recipe.component.html",
  styleUrls: ["./detail-recipe.component.scss"]
})
export class DetailRecipeComponent implements OnInit {
  public recipe = new Recipe();
  public categories = Constants.categories;
  private recipeSubs: Subscription;
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
    this.recipeSubs = this.recipeService
      .getRecipeById(id)
      .subscribe(data => (this.recipe = data));
  }
  ngOnDestroy() {
    this.subParams.unsubscribe();
    this.recipeSubs.unsubscribe();
  }
}
