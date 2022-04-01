import { Component, Input, EventEmitter , Output } from '@angular/core';
import { Task} from '../../models/task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../../../../assets/styles/item.component.css']
})
export class ItemComponent {

  @Input() task!: Task;

  @Output() onDeleteTask = new EventEmitter();
  @Output() onCompleteTask = new EventEmitter();

  delete(): void {
    this.onDeleteTask.emit(this.task?.id);
  }

  complete(): void {
    this.onCompleteTask.emit(this.task?.id)
  }

}