import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  //fire new selectedRecipe event
  constructor(private RecipeService: RecipeService,
  private router: Router,
private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.RecipeService.recipesChanged
    .subscribe(
      (recipes : Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.RecipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
