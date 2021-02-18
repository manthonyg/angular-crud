import { Component, OnInit } from '@angular/core';
import { ShoppingService } from "../../services/shopping/shopping.service";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

interface ShoppingItem {
  name: string;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  constructor(private shoppingService: ShoppingService) {
   }

   visible = true;
   selectable = true;
   removable = true;
   addOnBlur = true;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public shoppingList: ShoppingItem[];

  ngOnInit(): void {
      this.shoppingService.shoppingList$.subscribe((shoppingList) => {
        return this.shoppingList = shoppingList
    })
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.shoppingList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item: ShoppingItem): void {
    const index = this.shoppingList.indexOf(item);

    if (index >= 0) {
      this.shoppingList.splice(index, 1);
    }
  }
}

