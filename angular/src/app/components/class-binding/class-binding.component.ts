import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
public myColor="textColor"
public myGroup={
  textColor:true,
  textSize:true
}
public isRequired=true;
}
