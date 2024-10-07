import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskDto } from './add-task.dto';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() add = new EventEmitter<AddTaskDto>();
  @Output() cancel = new EventEmitter<void>();

  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onSubmit(event: SubmitEvent) {
    const newTask: AddTaskDto = {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.dueDate(),
    };
    this.add.emit(newTask);
  }

  onCancel() {
    this.cancel.emit();
  }
}
