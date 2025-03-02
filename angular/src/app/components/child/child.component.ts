import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public daddy:any
  @Output() public childName=new EventEmitter()  
  
  onClick(){
    this.childName.emit("ravi")
      
  }


// @Input() public pPostman:any
// @Output() public cData =new EventEmitter() 
// onClick(){
//    this.cData.emit("this is child data")
// }
}



