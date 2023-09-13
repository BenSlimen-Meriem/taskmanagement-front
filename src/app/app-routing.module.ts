import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewTaskListComponent } from './view-task-list/view-task-list.component';
import { CreateTaskListComponent } from './create-task-list/create-task-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-task-list', component: CreateTaskListComponent},
  {path: 'view-task-list', component: ViewTaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
