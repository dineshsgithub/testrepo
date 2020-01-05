import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
    { path: '', component: EmployeeDetailsComponent },
    { path: 'Add', component: AddEditEmployeeComponent },
    { path: 'Edit/:employeeId', component: AddEditEmployeeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }