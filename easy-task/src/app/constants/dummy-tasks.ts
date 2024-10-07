import { Task } from '../tasks/task/task.type';
import { dummyUsers } from './dummy-users';

export const dummyTasks: Task[] = [
  {
    id: crypto.randomUUID(),
    userId: dummyUsers.random()!.id,
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: crypto.randomUUID(),
    userId: dummyUsers.random()!.id,
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: crypto.randomUUID(),
    userId: dummyUsers.random()!.id,
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];
