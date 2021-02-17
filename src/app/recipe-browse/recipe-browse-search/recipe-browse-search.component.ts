import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../services/recipes/recipes.service";

interface SearchParams {
  q: string;
  i: string;
};

@Component({
  selector: 'app-recipe-browse-search',
  templateUrl: './recipe-browse-search.component.html',
  styleUrls: ['./recipe-browse-search.component.css']
})
export class RecipeBrowseSearchComponent implements OnInit {

  public searchParams: SearchParams = {q: '', i: ''};

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  searchRecipes(): void {
    console.log(this.searchParams)
    this.recipesService.fetchRecipes(this.searchParams)
  }

  logChange(): void {
    console.log(this.searchParams.q)
  }
}