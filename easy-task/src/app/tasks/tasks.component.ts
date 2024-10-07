import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTaskDto } from './add-task/add-task.dto';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.type';
import { User } from '../user/user.type';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get userTasks(): Task[] {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onCompleteTask(id: string): void {
    this.tasksService.completeTask(id);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  onAddTask(taskDto: AddTaskDto): void {
    this.tasksService.addTask(taskDto, this.user.id);
    this.isAddingTask = false;
  }
}
