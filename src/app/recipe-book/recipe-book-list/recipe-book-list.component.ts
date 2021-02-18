import { Component, OnInit } from '@angular/core';
import { RecipeBookService } from 'src/app/services/recipe-book/recipe-book.service';
import { Recipe } from "../../recipe-browse/recipe-browse-item/recipe.model";
@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit {

  constructor(private recipeBookService: RecipeBookService) { }

  public recipeBookList: Recipe[];

  ngOnInit(): void {
    this.recipeBookService.recipeSource$.subscribe((recipeList) => {
      this.recipeBookList = recipeList
    })
  }

}
