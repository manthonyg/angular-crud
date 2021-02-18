import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

interface ShoppingItem {
  name: string;
}

@Injectable({providedIn: 'root'})
export class ShoppingService {

  private readonly _shoppingList = new BehaviorSubject<ShoppingItem[]>([]);
  readonly shoppingList$ = this._shoppingList.asObservable();

  public getShoppingList(): ShoppingItem[] {
    return this._shoppingList.getValue();
  }

  private _setShoppingList(shoppingList: ShoppingItem[]): void {
    this._shoppingList.next(shoppingList)
  }

  public addItem(item: ShoppingItem): void {
    const newShoppingList = [...this.getShoppingList(), item]
    this._setShoppingList(newShoppingList)
  }

  public addItems(items: ShoppingItem[]): void {
    const newShoppingList = [...this.getShoppingList(), ...items]
    console.log(items)
    this._setShoppingList(newShoppingList);
    console.log(this.shoppingList$)
  }

  public removeItem(item: ShoppingItem): void {
    const newShoppingList = this.getShoppingList()
    .filter(x => x.name !== item.name)
    this._setShoppingList(newShoppingList)
  }

}