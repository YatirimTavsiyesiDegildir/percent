import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'STUDENTS',
    group: true,
  },
  {
    title: 'Profile',
    icon: 'person-outline',
    link: '/pages/profile',
    home: true,
  },
  {
    title: 'My Tasks',
    icon: 'brush-outline',
    link: '/pages/task-working',
  },
  {
    title: 'Available Task',
    icon: 'clipboard-outline',
    link: '/pages/available-microtasks',
  },
  {
    title: 'COMPANIES',
    group: true,
  },
  {
    title: 'Task Creator',
    icon: 'edit-2-outline',
    link: '/pages/task-creator',
  },
  {
    title: 'Existing Tasks',
    icon: 'checkmark-circle-outline',
    link: '/pages/task-details',
  },
];
