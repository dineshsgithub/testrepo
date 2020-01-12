import { NgModule } from '@angular/core';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsService } from './employee-details/employee-details.service';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee.routing.module';
import {CommonModule} from '@angular/common';
@NgModule({
    imports: [
        SharedModule,
        EmployeeRoutingModule,
        CommonModule],
    exports: [],
    declarations: [
        EmployeeDetailsComponent,
        AddEditEmployeeComponent
    ],
    providers: [EmployeeDetailsService]
})
export class EmployeeModule {

}