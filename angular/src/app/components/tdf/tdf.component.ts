import { Component } from '@angular/core';
import {User} from '../../user'
import { CourceService } from 'src/app/service/cource.service';
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
course=['angular','react','nodejs','java'];
userDetails= new User("","ravi@gmail.com","1234ss","","default",true);
users:any;
constructor(){}
getUserDetails(){
  console.log(this.userDetails)
}

}
