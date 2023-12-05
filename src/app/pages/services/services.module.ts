import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { StationaryComponent } from './stationary/stationary.component';
import { ConstructionComponent } from './construction/construction.component';
import { MoneyLendingComponent } from './money-lending/money-lending.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ServicesComponent } from './services.component';


@NgModule({
  declarations: [
    StationaryComponent,
    ConstructionComponent,
    MoneyLendingComponent,
    VehiclesComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
