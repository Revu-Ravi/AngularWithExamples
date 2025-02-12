import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourceService } from 'src/app/service/cource.service';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent {
  public cource:any = [];
  public errMsg=''
  constructor(private _courceService : CourceService, private _router:Router){
    this._courceService.getCourceInfo()
    .subscribe(res => this.cource = res,err=>this.errMsg=err);
}
onSelect(x: { id: any; }){
  this._router.navigate(['/selectedItems',x.id])
}
}
