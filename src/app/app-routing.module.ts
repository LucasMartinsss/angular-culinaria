import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./home/main/main.component";
import { NewRecipeComponent } from "./home/new-recipe/new-recipe.component";
import { ViewRecipesComponent } from "./home/view-recipes/view-recipes.component";
import { DetailRecipeComponent } from "./home/detail-recipe/detail-recipe.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "new",
        component: NewRecipeComponent
      },
      {
        path: "view",
        component: ViewRecipesComponent
      },
      {
        path: "detail/:id",
        component: DetailRecipeComponent
      },
      {
        path: "",
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
