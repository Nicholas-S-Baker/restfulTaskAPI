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
  oneTask: object;
  // update_bool: boolean = true;
  newTask: object;

  constructor(private _httpService: HttpService){
    //reserve for dependency injections
  }

  ngOnInit(){
    //difference in this and constructor?
    this.getTasksFromService();
    this.newTask = {title: "", description: ""}
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe( data => {
      console.log("Here's the Data", data)
      this.tasks = data;
    })
  }

  editClick(id: string): void {
    let observable = this._httpService.getOne(id);
    observable.subscribe( data =>{
      this.oneTask = data;
      console.log("Here's one", data);
    })
  }  
  
  editSubmit(id: string): void{
    console.log("***********IN UPDATE");
    console.log(this.oneTask);
    console.log(id);
    let observable = this._httpService.updateTask(this.oneTask, id);
    observable.subscribe(data => {
      console.log("****** IN SUB", data);
    })
    this.getTasksFromService();
    this.oneTask = null;
  }

  newSubmit(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""};
    })
    this.getTasksFromService();
  }
  
  deleteClick(id: string){
    console.log("*******IN DELETE", id)
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log(data)
    })
    this.getTasksFromService();
  }

}