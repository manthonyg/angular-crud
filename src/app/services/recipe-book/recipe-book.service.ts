import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Recipe } from "../../recipe-browse/recipe-browse-item/recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeBookService {

  constructor() {}

  private readonly _recipeSource = new BehaviorSubject<Recipe[]>([]);
  readonly recipeSource$ = this._recipeSource.asObservable()


  public getRecipeBook(): Recipe[] {
    return this._recipeSource.getValue()
  }

  private _setRecipeBook(recipes: Recipe[]): void {
    this._recipeSource.next(recipes)
  }

  public addRecipeToBook(recipe: Recipe): void {
    const newRecipeBook = [...this.getRecipeBook(), recipe]
    this._setRecipeBook(newRecipeBook)
  }

  public getRecipeFromBook(recipeTitle: string): Recipe {
    return this.getRecipeBook().filter(x => x.title === recipeTitle)[0]
  }
}