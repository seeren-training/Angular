import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';

import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
