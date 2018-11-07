import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { MainComponent } from './home/main/main.component';
import { NewRecipeComponent } from './home/new-recipe/new-recipe.component';
import { ViewRecipesComponent } from './home/view-recipes/view-recipes.component';
import { DetailRecipeComponent } from './home/detail-recipe/detail-recipe.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, MainComponent, NewRecipeComponent, ViewRecipesComponent, DetailRecipeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
