import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

const employeeRoutes: Routes = [
    { path: '', component: EmployeeDetailsComponent },
    { path: 'add', component: AddEditEmployeeComponent },
    { path: 'edit/:employeeId', component: AddEditEmployeeComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(employeeRoutes)
    ],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {

}