import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule } from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from "@angular/material/grid-list";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from './header/header.component';
import {MatChipsModule} from '@angular/material/chips';
import { FooterComponent } from './footer/footer.component';
import { RecipeBrowseListComponent } from './recipe-browse/recipe-browse-list/recipe-browse-list.component';
import { RecipeBookListComponent } from './recipe-book/recipe-book-list/recipe-book-list.component';
import { RecipeBookDetailsComponent } from './recipe-book/recipe-book-details/recipe-book-details.component';
import { RecipeBrowseItemComponent } from './recipe-browse/recipe-browse-item/recipe-browse-item.component';
import { ShoppingListComponent } from './shopping-cart/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-cart/shopping-list-item/shopping-list-item.component';
import { RecipeBrowseSearchComponent } from './recipe-browse/recipe-browse-search/recipe-browse-search.component';
import {MatInputModule} from '@angular/material/input';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';
import { RecipeBrowseDetailsComponent } from './recipe-browse/recipe-browse-details/recipe-browse-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeBrowseListComponent,
    RecipeBookListComponent,
    RecipeBookDetailsComponent,
    RecipeBrowseItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    RecipeBrowseSearchComponent,
    RecipeBrowseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    HttpCacheInterceptorModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
