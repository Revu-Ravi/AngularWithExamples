import { Component } from '@angular/core';
import { ActivatedRoute,ParamMap, Router } from '@angular/router';
import { CourceService } from 'src/app/service/cource.service';

@Component({
  selector: 'app-cource-details',
  templateUrl: './cource-details.component.html',
  styleUrls: ['./cource-details.component.css']
})
export class CourceDetailsComponent {
  public cource:any = [];
  public errMsg=''
constructor(private _courceService:CourceService, private _router:Router, private _activatedroute:ActivatedRoute){
  this._courceService.getCourceInfo().subscribe(res=>this.cource=res,err=>this.errMsg=err)
}
onSelect(x: { id: any; }){
   this._router.navigate(['/selectedItems',x.id])
}
 
public returningID:any;
isSelected(x: { id: any; }){
  this._activatedroute.paramMap.subscribe((p:ParamMap)=>{
    const id =p.get('id')
    if(id!==null){
      this.returningID=parseInt(id)
    }
    
  })
  return x.id=== this.returningID;

}
}
