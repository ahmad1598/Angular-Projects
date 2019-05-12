import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is an example','https://images.unsplash.com/photo-1511609019130-f415a74b3e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'),
    new Recipe('A Test Recipe','This is an example','https://images.unsplash.com/photo-1511609019130-f415a74b3e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'),
    new Recipe('A Test Recipe','This is an example','https://images.unsplash.com/photo-1511609019130-f415a74b3e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80')
  ]
  constructor() { }

  ngOnInit() {
  }

}
