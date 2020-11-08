import { Component } from '@angular/core';
import { tasks } from './task-list';


@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  tasks = tasks;
  searchedTasks = [...tasks];

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  onClick() {

  }

  search(event) {
    const searchString = event.target.value + event.key;
    this.searchedTasks = [];

    for (const task of tasks) {
      if (task.indexOf(searchString) !== -1) {
        this.searchedTasks.push(task);
      }
    }
  }


}
