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

  createTask(task: object){
    return this._http.post('/api/tasks/new', task)
  }

  updateTask(task: object, id: string){
    return this._http.put(`/api/tasks/${id}`, task) 
  }

  deleteTask(id: string){
    return this._http.delete(`/api/tasks/${id}`) 
  }
}