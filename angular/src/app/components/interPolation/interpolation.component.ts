import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
public name:string="Revu Ravi"
// public x:number=10
getMyName(){
  return `${this.name}`
}
emp={
  fname:"madhu",
  lname:"jalla",
  age:25
}
employee=[
  {
    name:"shalini",
    age:23
  },
  {
    name:"madhu",
    age:25
}]
imgURL="https://images.pexels.com/photos/18361562/pexels-photo-18361562/free-photo-of-legs-and-shoes-of-person-sitting-on-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
