import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module"

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
