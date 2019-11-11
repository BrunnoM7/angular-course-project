import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('Delicia Maior', 'Teste Recipe, show! Do tipo que é louco real e bomzão, de lamber os beiços', 'https://asset.slimmingworld.co.uk/content/media/11742/chunky-spiced-chicken-burger_sw_recipe.webp?v1=JGXiore20qg9NNIj0tmc3ZeLYCPaZrsHG52q33-ZTZNzlAUyZVA3xkf8t0JL4LNZOQkDIPWYgWQCL2Cpkzpu8kFN2klwaUiIQQTq7G39dr7NQHzPyAq_hBpSyUmHsknwshcwLFi5yiTn2Pi05SU58A&width=278&height=278'),
    // tslint:disable-next-line: max-line-length
    new Recipe('Delicia', 'Teste Recipe, show! Bem boa essa também.', 'https://asset.slimmingworld.co.uk/content/media/11742/chunky-spiced-chicken-burger_sw_recipe.webp?v1=JGXiore20qg9NNIj0tmc3ZeLYCPaZrsHG52q33-ZTZNzlAUyZVA3xkf8t0JL4LNZOQkDIPWYgWQCL2Cpkzpu8kFN2klwaUiIQQTq7G39dr7NQHzPyAq_hBpSyUmHsknwshcwLFi5yiTn2Pi05SU58A&width=278&height=278'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
