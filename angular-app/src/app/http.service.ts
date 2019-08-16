import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
      this.getTasks();
      this.getOne();
  }
  getTasks(){
    console.log("IN GET TASKS FUNC")
    let tempObservable = this._http.get('/api/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  getOne(){
    let tempObservable = this._http.get('/api/tasks/:id');
    tempObservable.subscribe(data => console.log("Got 1 task!", data));
  }
}