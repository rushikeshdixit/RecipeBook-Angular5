import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;

  constructor(private recipeService: RecipeService,
  private route: ActivatedRoute,
private router: Router) { }

  ngOnInit() {
    // subscribe for each change and return id from childRoute
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id= +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToSL(){
    this.recipeService.addIngToSL(this.recipe.ingredients);
  }


  onEditRecipe(){
    this.router.navigate(['edit'], { relativeTo:this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
