import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../../../assets/styles/app.component.css']
})
export class AppComponent {

  tasks: Array<string> = [
    "Go to shop", "Go to cinema"
  ]

  addTask(myForm: NgForm): void {
    this.tasks.push(myForm.value.task);
  }
   
  onDelete(text: string): void {
    this.tasks = this.tasks.filter(task => task != text);
  }
}
