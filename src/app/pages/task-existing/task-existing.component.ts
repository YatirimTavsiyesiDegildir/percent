import { Component } from '@angular/core';
import {existingTasks} from './existing-tasks';

@Component({
  selector: 'ngx-task-details' ,
  templateUrl: './task-existing.component.html',
  styleUrls: ['list.component.scss'],
})
export class TaskExistingComponent {
  tasks = existingTasks;
}
