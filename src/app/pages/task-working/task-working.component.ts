import { Component } from '@angular/core';
import {taskWorking} from './task-working';

@Component({
  selector: 'ngx-task-details' ,
  templateUrl: './task-working.component.html',
  styleUrls: ['list.component.scss'],
})
export class TaskWorkingComponent {
  tasks = taskWorking;
}
