import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";
import { DataStorageService } from "../../shared/data-storage.service";
import { Response } from '@angular/http';
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class headerComponent{
    // emit featureSelected with specified feature to be caught by the app component based on on select method in a tag
    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
constructor(private dataStorageService: DataStorageService,
            private authService: AuthService){}
    onSaveData(){
        this.dataStorageService.storeRecipes()
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }
    onFetchData(){
        this.dataStorageService.getRecipes();
    }
    onLogout(){
        this.authService.logout();
    }
    isAuthenticated() {
        return this.authService.isAuthenticated();
      }

}