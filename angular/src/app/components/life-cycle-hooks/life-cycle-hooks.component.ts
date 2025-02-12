import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, DoCheck  {
@Input() myNumber: any
constructor(){}
ngOnChanges(changes: SimpleChanges) {
  const newNumberChange:SimpleChange=changes['myNumber']
  console.log("ngOnChange()->previous value:",newNumberChange.previousValue);
  console.log("ngOnChange()->current value:",newNumberChange.currentValue);
}
ngOnInit(): void {
  console.log("ngOnInit()->value:",this.myNumber);
}
ngDoCheck(): void {
  console.log("ngDoCheck()->value:",this.myNumber);
}
ngAfterContentInit(){
  console.log("ngAfterContentInit()->It gets only onace");
} 
ngAfterContentChecked(){
  console.log("ngAfterContentChecked()->It get called every changes");
}
ngAfterViewInit(){
  console.log("ngAfterViewInit()->It gets only onace after ngAfterContentChecked()");
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked()->It gets every change after ngAfterViewInit()");
}
ngOnDestroy(){
  console.log("Component has been destroyed!!!");
}
}
