import { Ingredient } from '../shared/ingredient.model'
// import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('apples',10)
      ];


      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }
      getIngredient(index: number){
        return this.ingredients[index];
      }
      updateIngredient(index: number, newingredient: Ingredient){
        this.ingredients[index] = newingredient;
        this.ingredientChanged.next(this.ingredients.slice());
      }
      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}