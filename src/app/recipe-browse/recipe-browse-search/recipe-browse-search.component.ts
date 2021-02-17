import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../services/recipes/recipes.service";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { delimitIngredients } from "../../shared/helpers/api.helpers";

interface SearchParams {
  q: string;
  i: string;
};

export interface Ingredient {
  name: string;
}

@Component({
  selector: 'app-recipe-browse-search',
  templateUrl: './recipe-browse-search.component.html',
  styleUrls: ['./recipe-browse-search.component.css']
})
export class RecipeBrowseSearchComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  public ingredients: Ingredient[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  public searchParams: SearchParams = {q: '', i: delimitIngredients(this.ingredients)};
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  searchRecipes(): void {
    console.log(this.searchParams)
    this.recipesService.fetchRecipes(this.searchParams)
  }

  logChange(): void {
    console.log(this.searchParams.q)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add the ingredient
    if ((value || '').trim()) {
      this.ingredients.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredient: Ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }
}
