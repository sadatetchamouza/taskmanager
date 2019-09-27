import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  
  tasks: Task[];
  taskSubscription: Subscription;
  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	this.taskSubscription = this.taskService.taskSubject.subscribe(
  		(tasks: Task[]) => {
  			this.tasks = tasks;
  		}
  	);
  	this.taskService.getTasks();
  	this.taskService.emitTasks();
  }

  onCheckTask(task: Task){
  	this.taskService.checkTask(task);
  }

  onRemoveTask(task: Task){
    this.taskService.removeTask(task);
  }

  ngOnDestroy(){
  	this.taskSubscription.unsubscribe();
  }

}
