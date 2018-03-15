import {Recipe} from './recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    // selectedRecipe = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'first test recipe',
            'test recipe',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
            [
                new Ingredient('Meat', 1)
            ]
        ),
        new Recipe(
            'second test recipe',
            'test recipe',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
            [
                new Ingredient('Meat', 1)
            ]
        ),
        new Recipe(
            'third test recipe',
            'test recipe',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
            [
                new Ingredient('Meat', 1)
            ]
        )
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id:number){
        return this.recipes[id];
      }

      addIngToSL(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}