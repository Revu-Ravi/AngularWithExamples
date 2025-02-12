import { Component } from '@angular/core';
import { CourceService } from 'src/app/service/cource.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class APICallsComponent {
  users:any;
  newUser={
    name:'',
    email:'',
    password:'',
  }
  constructor(private courceService:CourceService){}

  getUsers(){
    this.courceService.addUsers(this.newUser).subscribe((data)=>{
       this.users= data
      data.users.forEach((element:any) => {
        console.log(element)
      });
        console.log(data)
     
    })
  }
}
