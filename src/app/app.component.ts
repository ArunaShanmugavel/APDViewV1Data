import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
import {ViewV1Data } from '../service/viewv1data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ViewV1Data]
})
export class AppComponent {
  title = 'app1';
  yoshiUrl = assetUrl("yoshi.png");
  public data;
  isViewData: boolean =false;
  constructor(public service:ViewV1Data){}

  selectedOption: string="";        
  
  setoption(e: string): void   
  { 
     this.selectedOption = e;          
  }  
  
    isSelected(option: string): boolean   
    {        
       if (!this.selectedOption) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
        }  
  
        return (this.selectedOption === option); // if current radio button is selected, return true, else return false  
    }
    
    viewData() {
      if(this.selectedOption==="scrum"){
          this.data =this.service.getScrumData().subscribe(           
            res => {
              this.data= res;
              this.isViewData =true;
            },
            error => {
              console.error("server error");
            }
        );
      }
      else if(this.selectedOption==="kanban"){
          this.service.getKanbanData().subscribe(           
            res => {
              this.data= res;
              this.isViewData =true;
            },
            error => {
              console.error("server error");
            }
        );
      }
      
    }   
}
