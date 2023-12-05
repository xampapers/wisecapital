import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { OurTeamComponent } from './our-team/our-team.component';






@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    OurTeamComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
   

    
    
  ]
})
export class PagesModule { }
