import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';


@NgModule({
  declarations: [
    AllProjectsComponent,
    SingleProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
