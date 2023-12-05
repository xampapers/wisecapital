import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
  path:'home',component:HomeComponent
},
{
  path:'services',loadChildren: () =>import('./services/services.module').then((m) => m.ServicesModule)
}
,
{
  path:'about-us',component:AboutUsComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'our-team',component:OurTeamComponent
},

{ 
  path: '**', redirectTo: '/home' 
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
