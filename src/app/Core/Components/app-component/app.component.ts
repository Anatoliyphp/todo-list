import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../../../assets/styles/app.component.css']
})
export class AppComponent {

  id: number = 2;

  tasks: Array<Task> = [
    {id: 1, text: "Do something", completed: false},
    {id: 2, text: "Do thing", completed: false}
  ]

  completeTasks: Array<Task> = [];

  addTask(myForm: NgForm): void {
    this.id++;
    this.tasks.push({id: this.id, text: myForm.value.task as string, completed: false});
  }
   
  onDelete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id != id);
    this.completeTasks = this.completeTasks.filter(task => task.id != id);
  }

  onComplete(id: number): void {
    let task: Task = this.tasks.find(task => task.id == id) as Task;
    this.completeTasks.push(task);
  }
}
