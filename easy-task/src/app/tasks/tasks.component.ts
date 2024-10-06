import { Component, Input } from '@angular/core';
import { dummyTasks } from '../constants/dummy-tasks';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.type';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  tasks = [...dummyTasks];

  get userTasks() {
    return this.tasks.filter((t) => t.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
