import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Sour Cream Chip Muffins','This is an example','https://www.tasteofhome.com/wp-content/uploads/2017/10/exps10111_MRR143297C09_10_2b-1.jpg'),
    new Recipe('Onion Beef au Jus','This is an example','https://www.tasteofhome.com/wp-content/uploads/2018/01/Onion-Beef-au-Jus_exps21298_CW143433B03_21_6b_RMS.jpg'),
    new Recipe('Tasty-Italian Vegetable Soup','This is an example','https://www.tasteofhome.com/wp-content/uploads/2017/10/Tasty-Italian-Vegetable-Soup_exps2558_EIT2919394D11_29_1bC_RMS-2.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
