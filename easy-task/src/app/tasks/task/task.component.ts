import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from '@/app/ui/card/card.component';
import { Task } from './task.type';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
