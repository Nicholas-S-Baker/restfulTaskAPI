import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
 
  getTasks(){
    return this._http.get('/api/tasks') // this returns the observable so component can subscribe
  }

  getOne(id: string){
    return this._http.get(`/api/tasks/${id}`)
  }
  // postTask(data){
  //   return this._http.post('/api/tasks/:id')
  // }
}