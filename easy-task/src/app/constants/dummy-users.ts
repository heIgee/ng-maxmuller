import { User } from '../user/user.type';

export const dummyUsers: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: crypto.randomUUID(),
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
] as const;
