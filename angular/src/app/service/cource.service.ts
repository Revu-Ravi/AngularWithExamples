import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourceService {

  constructor(private _http:HttpClient) { }
  private _url='../../assets/courcedetails.json'
  private _url1='https://jsonplaceholder.typicode.com/posts/1'
  private _url2='https://jsonplaceholder.typicode.com/posts'

  getCourceInfo(): Observable<any>{
    return this._http.get<any>(this._url)
    .pipe(catchError(this.incommingError))
  }
  incommingError(err:HttpErrorResponse){
    return throwError(err.message)
  }

  getUsers(){
    return this._http.get<any>(this._url1)
  }
  addUsers(newUser:any){
    return this._http.post<any>(this._url2, newUser)
  }
  deleteUsers(id:number){
    return this._http.delete<any>(this._url2+`${id}`)
  }
}
