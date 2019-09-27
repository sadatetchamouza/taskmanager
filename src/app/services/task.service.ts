import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	
  tasks: Task[] = [];
  taskSubject = new Subject<Task[]>();

  constructor() { }

  emitTasks(){
  	this.taskSubject.next(this.tasks);
  }

  saveTasks(){
  	firebase.database().ref('/tasks').set(this.tasks);
  }

  createNewTask(task: Task){
  	this.tasks.push(task);
  	this.emitTasks();
  	this.saveTasks();
  }

  getTasks(){
  	firebase.database().ref('/tasks')
  	.on('value', (data) => {
  		this.tasks = data.val() ? data.val() : [];
  		this.emitTasks();
  	})
  }

  checkTask(task: Task){
    if(task.checked){
      task.checked = false;
    }else{
      task.checked = true;
    }
  	this.emitTasks();
  	this.saveTasks();
  }

  removeTask(task: Task){
    const taskIndexToRemove = this.tasks.findIndex(
      (taskEl) => {
        if(taskEl === task){
          return true;
        }
      }
    );
    this.tasks.splice(taskIndexToRemove, 1);
    this.saveTasks();
    this.emitTasks();
  }


}
