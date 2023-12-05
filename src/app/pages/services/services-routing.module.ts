import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ConstructionComponent } from './construction/construction.component';
import { MoneyLendingComponent } from './money-lending/money-lending.component';
import { ServicesComponent } from './services.component';
import { StationaryComponent } from './stationary/stationary.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path:'',component:ServicesComponent
  },
  {
  path:'stationary',component:StationaryComponent
},
{
  path:'construction',component:ConstructionComponent
},
{
  path:'money-lending',component:MoneyLendingComponent
},
{
  path:'vehicles',component:VehiclesComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
