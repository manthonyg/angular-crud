import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Recipe } from "../../recipe-browse/recipe-browse-item/recipe.model";
import { pipe, Subject } from "rxjs";
import { parseIngredients } from "../../shared/helpers/api.helpers";
import { map } from "rxjs/operators";

interface SearchParams {
  q: string;
  i: string;
}

@Injectable({providedIn: 'root'})
export class RecipesService {

  
  constructor(private http: HttpClient) {}

  public recipeBrowseList = new Subject<Recipe[]>()

  fetchRecipes(searchParams: SearchParams): void {
    this.http.get<Recipe[]>(`http://www.recipepuppy.com/api/?i=${searchParams?.i}&q=${searchParams?.q}&p=3`, {
    })
    .pipe(map(recipes => {
      return recipes['results'].map(recipe => {
        return {
          ...recipe,
          ingredients: parseIngredients(recipe.ingredients)
        }
      })
    }))
    .subscribe(recipes => {
      console.log({recipes})
      this.recipeBrowseList.next(recipes)
    })
  }
}