import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('German Schnitzel',
         'Our Authentic German Schnitzel',
          'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
        [new Ingredient('Chicken', 1), new Ingredient('lemon', 2)]),
        new Recipe('American Burger',
         'Cheese Burger',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg',
    [new Ingredient('Bun', 1), new Ingredient('Meat', 1), new Ingredient('Cheese', 2)])
      ];

    constructor(private shoppingListService: ShoppingListService) {

    }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShppingList(ingredient: Ingredient[]) {
        this.shoppingListService;
      }
}