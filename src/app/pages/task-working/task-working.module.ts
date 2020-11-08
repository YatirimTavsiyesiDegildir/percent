import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import {
  NbAccordionModule,
  NbRouteTabsetModule,
  NbStepperModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { TaskWorkingComponent } from './task-working.component';
import { ChartModule } from 'angular2-chartjs';


import {FormsModule} from '../forms/forms.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    FormsModule,
    NbAccordionModule,
    NbRouteTabsetModule,
    NbStepperModule,
  ],
  declarations: [
    TaskWorkingComponent,
  ],
})
export class TaskWorkingModule { }
