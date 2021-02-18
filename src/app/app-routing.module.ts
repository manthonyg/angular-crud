import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBrowseListComponent } from "./recipe-browse/recipe-browse-list/recipe-browse-list.component";
import { RecipeBookDetailsComponent } from "./recipe-book/recipe-book-details/recipe-book-details.component";
import { RecipeBookListComponent } from "./recipe-book/recipe-book-list/recipe-book-list.component";
import { ShoppingListComponent } from './shopping-cart/shopping-list/shopping-list.component';
import { RecipeBrowseDetailsComponent } from "./recipe-browse/recipe-browse-details/recipe-browse-details.component";

const routes: Routes = [
  { path: '', component: RecipeBrowseListComponent },
  { path: 'recipe-list', component: RecipeBookListComponent, children: [
    { path: ':title', component: RecipeBrowseDetailsComponent }
  ]},
  { path: 'shopping-list', component: ShoppingListComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
