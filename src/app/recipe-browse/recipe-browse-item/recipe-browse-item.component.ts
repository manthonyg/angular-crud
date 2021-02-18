import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingService } from "../../services/shopping/shopping.service";
import { parseIngredients } from "../../shared/helpers/api.helpers";
interface ShoppingItem {
  name: string;
}
@Component({
  selector: 'app-recipe-browse-item',
  templateUrl: './recipe-browse-item.component.html',
  styleUrls: ['./recipe-browse-item.component.css']
})
export class RecipeBrowseItemComponent implements OnInit {
   @Input() recipe: Recipe;
   @Input() canView: Boolean = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  handleAddItems(items: string): void {
    console.log(items)
    const shoppingItems = [...items].map(item => {
      return {
        name: item
      }
    });
    this.shoppingService.addItems(shoppingItems)
  }
}
