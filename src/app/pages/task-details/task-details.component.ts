import { Component } from '@angular/core';
import {existingTasks} from './existing-tasks';

@Component({
  selector: 'ngx-task-details' ,
  templateUrl: './task-details.component.html',
  styleUrls: ['list.component.scss'],
})
export class TaskDetailsComponent {
  tasks = existingTasks;

  onClick() {

  }
}
