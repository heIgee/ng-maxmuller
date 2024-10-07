import { Injectable, signal } from '@angular/core';
import { BrowserStorageService } from '../shared/services/browser-storage.service';
import { dummyTasks } from '../constants/dummy-tasks';
import { dummyUsers } from '../constants/dummy-users';
import { AddTaskDto } from './add-task/add-task.dto';
import { Task } from './task/task.type';

const TASKS_KEY = 'tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal([...dummyTasks]);

  constructor(private storageService: BrowserStorageService) {
    const storedTasks = this.storageService.get(TASKS_KEY);
    if (!storedTasks) {
      this.tasks.set([...dummyTasks]);
      return;
    }
    try {
      let tasks: Task[] = JSON.parse(storedTasks);
      tasks = tasks.map((t) => ({ ...t, userId: dummyUsers.random()!.id }));
      this.tasks.set(tasks);
    } catch {
      this.tasks.set([...dummyTasks]);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks().filter((t) => t.userId === userId);
  }

  completeTask(id: string): void {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
    this.storageService.set(TASKS_KEY, JSON.stringify(this.tasks()));
  }

  addTask(taskDto: AddTaskDto, userId: string): void {
    this.tasks.update((tasks) => [
      {
        ...taskDto,
        id: crypto.randomUUID(),
        userId: userId,
      },
      ...tasks,
    ]);
    this.storageService.set(TASKS_KEY, JSON.stringify(this.tasks()));
  }
}
