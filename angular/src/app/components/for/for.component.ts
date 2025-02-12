import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
public names=["yogi","ravi","madhu"]
public emp=[{
  id:1,
  name:"ravi",
  age:24}, 
  {
  id:2,
  name:"bhargavi",
  age:27}]
}
