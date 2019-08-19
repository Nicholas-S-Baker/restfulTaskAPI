import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
      // this.getOne();
      // this.getTasks();
  }
 
  getTasks(){
    // let tempObservable = this._http.get('/api/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/tasks') // this returns the observable so component can subscribe
  }

  getOne(){
    // let tempObservable = this._http.get('/api/tasks/:id');
    // tempObservable.subscribe(data => console.log("Got 1 task!", data));
    return this._http.get('/api/tasks/5d54a61d29d78e4ee468a5f9')
  }
}