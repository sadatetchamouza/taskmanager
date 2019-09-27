import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.taskForm = this.formBuilder.group({
		content: ['', Validators.required]
  	});
  }

  onSaveTask(){
  	const content = this.taskForm.get('content').value;
  	const newTask = new Task(content, false);
  	this.taskForm.reset();
  	this.taskService.createNewTask(newTask);
  }

}
