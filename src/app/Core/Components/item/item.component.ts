import { Component, Input, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../../../../assets/styles/item.component.css']
})
export class ItemComponent {

  @Input() text?: string;
  @Output() onDeleteTask = new EventEmitter();

  delete(): void {
    this.onDeleteTask.emit(this.text);
  }

}