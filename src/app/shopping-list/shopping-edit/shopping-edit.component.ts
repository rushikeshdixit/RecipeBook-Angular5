import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  edittedItem: Ingredient;
  // @ViewChild('nameInput') nameRef :ElementRef;
  // @ViewChild('amountInput') amountRef :ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.edittedItemIndex = index;
        this.editMode = true;
        this.edittedItem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount
        })
      }
    );
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.edittedItemIndex)
    this.onClear();
  }
  // onadd method to bind ref variables to newIngredient variable and emit it to be listened by shopping-list component
  onAddItem(form: NgForm){
    // const ingName = this.nameRef.nativeElement.value
    // const ingAmount = this.amountRef.nativeElement.value
    // newIngredient variable with type Ingredient imported above
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
      this.slService.updateIngredient(this.edittedItemIndex, newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
