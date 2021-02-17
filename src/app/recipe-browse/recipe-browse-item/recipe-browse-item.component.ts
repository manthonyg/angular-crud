import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-browse-item',
  templateUrl: './recipe-browse-item.component.html',
  styleUrls: ['./recipe-browse-item.component.css']
})
export class RecipeBrowseItemComponent implements OnInit {
   @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
