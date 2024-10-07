import { OmitFrom } from '@/types/utils';
import { Task } from '../task/task.type';

export type AddTaskDto = OmitFrom<Task, 'id' | 'userId'>;
