import { Component } from '@angular/core';

@Component({
  selector: 'app-two-waydatabinding',
  templateUrl: './two-waydatabinding.component.html',
  styleUrls: ['./two-waydatabinding.component.css']
})
export class TwoWaydatabindingComponent {
  public myName:string=''
  public myCource:string=''
  public myFee:number=0
  public myText:string=''
  onClick(name:any){
    console.log("Welcome", name)
     this.myName=name
  }
  onClick1(cource:any){
    console.log("Welcome", cource)
     this.myCource=cource
  }
  onClick2(fee:any){
    console.log("Welcome", fee)
     this.myFee=fee
  }
}
