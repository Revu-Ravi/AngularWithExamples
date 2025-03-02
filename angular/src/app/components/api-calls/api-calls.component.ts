import { Component } from '@angular/core';
import { CourceService } from 'src/app/service/cource.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class APICallsComponent {
  users:any[]=[];
  newUser={
    userId:'',
    title:'',
    body:'',
  }
  constructor(private courceService:CourceService){}

  getUsers(){
    this.courceService.getUsers().subscribe((data:any)=>{
       this.users= data
      //  this.users.forEach((element:any) => {
      //     console.log(element)
      //   });
    },
    (err)=>{
       console.log("error",err)
    });
    
  }
  addUsers(){
    this.courceService.addUsers(this.newUser).subscribe((data:any)=>{
       this.users= [data]
      // data.users.forEach((element:any) => {
      //   console.log(element)
      // });
        console.log(this.users)    
    },
    (err)=>{
       console.log("error",err)
    });
  }
  deleteUsers(){
    this.courceService.deleteUsers(100).subscribe((data:any)=>{
       this.users= [data]
      // data.users.forEach((element:any) => {
      //   console.log(element)
      // });
        console.log("delete")    
    },
    (err)=>{
       console.log("error",err)
    });
  }
}
