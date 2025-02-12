import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RSK';
  private myNumber=25;
  isVisible:boolean=true;
  get counter(){
    return this.myNumber
  }
  set counter(value){
    this.myNumber=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
     this.counter--;
  }
  SwitchVisibility(){
    this.isVisible=!this.isVisible;
  }
}
