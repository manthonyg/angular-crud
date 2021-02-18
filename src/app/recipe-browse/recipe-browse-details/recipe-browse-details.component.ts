import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-browse-item/recipe.model';
import { RecipesService } from "../../services/recipes/recipes.service";
import { ActivatedRoute } from "@angular/router";
import { RecipeBookService } from "../../services/recipe-book/recipe-book.service";

@Component({
  selector: 'app-recipe-browse-details',
  templateUrl: './recipe-browse-details.component.html',
  styleUrls: ['./recipe-browse-details.component.css']
})
export class RecipeBrowseDetailsComponent implements OnInit {
  public recipe: Recipe;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private recipeBookService: RecipeBookService) { }

  ngOnInit(): void {
    const recipeTitle = this.route.snapshot.params['title']
    this.recipe = this.recipeService.getRecipe(recipeTitle)
  }

  public handleAddRecipe(recipe: Recipe): void {
    this.recipeBookService.addRecipeToBook(recipe)
  }

}
