import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  public myColor='blue'
  public isRequired: boolean= true
  public myStyleGroup={
  color:'orange',
  fontStyle:'italic',
  fontSize:'80'
  }
}
