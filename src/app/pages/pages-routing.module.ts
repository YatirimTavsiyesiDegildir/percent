import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './task-available/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {TaskExistingComponent} from './task-existing/task-existing.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskWorkingComponent} from './task-working/task-working.component';
import {TaskSubmitModule} from './task-submit/task-submit.module';

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
      component: TaskSubmitModule,
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
      path: 'dashboard',
      component: ECommerceComponent,
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
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
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
