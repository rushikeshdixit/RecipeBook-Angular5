import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index : number;
  // event Emitter created for recipe Selection and output is added to send data to other components
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }



}
