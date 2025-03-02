import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
data:any;
  onClick(){
       console.log("you click me")
  }
  onDblClick(){
    console.log("you double click me")
}
onOver(){
  console.log("mouse over")
}
onOut(){
  console.log("mouse out")
}
onMove(){
  console.log("mouse move")
}
kDown(){
  console.log("key down")
}
kUp(){
  console.log("key up")
}
kPress(){
  console.log("key press")
}
onFocus(){
  console.log("input got focused")
}
onFocusOut(){
  console.log("input lost focused")
}
onInput(){
  console.log("You entered a charecter")
}

}
