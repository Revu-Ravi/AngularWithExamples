import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent {
public courseId:any;

constructor(private _activeRoute: ActivatedRoute, private _router:Router ){
  // this.courseId=this._activeRoute.snapshot.paramMap.get('id')
  this._activeRoute.paramMap.subscribe((p:ParamMap)=>{
    const id = p.get('id');
    if (id !== null) {
      this.courseId = parseInt(id);
    } 
    })
}
onPrevious(){
  let currentId = this.courseId - 1
  //this.currentId = this.currentId-1
 this._router.navigate(['/selectedItems',currentId ])
}
onNext(){
  let currentId = this.courseId + 1
  // this.currentId= this.currentId-1;
   this._router.navigate(['/selectedItems',currentId])
}
goBack(){
  this._router.navigate(['/courceDetails',{id:this.courseId}])
}
}
