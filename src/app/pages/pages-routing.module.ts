import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './task-available/dashboard.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {TaskExistingComponent} from './task-existing/task-existing.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskWorkingComponent} from './task-working/task-working.component';
import {TaskSubmitComponent} from './task-submit/task-submit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'task-creator',
      component: TaskCreatorComponent,
    },
    {
      path: 'task-working',
      component: TaskWorkingComponent,
    },
    {
      path: 'task-submit',
      component: TaskSubmitComponent,
    },
    {
      path: 'task-edit',
      component: TaskEditComponent,
    },
    {
      path: 'task-details',
      component: TaskExistingComponent,
    },
    {
      path: 'tasks',
      component: TaskDetailComponent,
    },
    {
      path: 'available-microtasks',
      component: DashboardComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
