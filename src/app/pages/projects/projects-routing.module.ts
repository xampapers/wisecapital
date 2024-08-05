import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';

const routes: Routes = [
  {
    path:'',component:AllProjectsComponent
  },
  {
    path:':projectId',component:SingleProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
