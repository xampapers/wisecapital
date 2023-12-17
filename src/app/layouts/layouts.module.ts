import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    WhatsappIconComponent,
   
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    
  ]
})
export class LayoutsModule { }
