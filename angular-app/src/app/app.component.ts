import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  tasks: object;
  one_task: object;
  task_bool: boolean = false;

  constructor(private _httpService: HttpService){
    //reserve for dependency injections
  }
  ngOnInit(){
    //difference in this and constructor?
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe( data => {
      console.log("Here's the Data", data)
      this.tasks = data;
      console.log(this.tasks);
    })
  }

  getOneTaskFromService(id: string){
    console.log("******** IN GET ONE FUNC")
    let observable = this._httpService.getOne(id);
    observable.subscribe( data =>{
      this.one_task = data;
      console.log("Here's one", data);
    })
  }

  allTasksClick(): void {
    this.getTasksFromService()
  }  

  showClick(id: string): void {
    console.log("********* IN SHOW CLICK");
    this.getOneTaskFromService(id);
  }  
}