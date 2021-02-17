import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe-browse-item/recipe.model";
import { RecipesService } from "../../services/recipes/recipes.service";

@Component({
  selector: 'app-recipe-browse-list',
  templateUrl: './recipe-browse-list.component.html',
  styleUrls: ['./recipe-browse-list.component.css']
})
export class RecipeBrowseListComponent implements OnInit {

  public recipes: Recipe[];
  public searchParams: object
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeBrowseList.subscribe((recipes => {
      this.recipes = recipes
    }));
  }


}
