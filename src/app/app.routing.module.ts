import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { HomeComponent } from './home/home.component';
import { FeedbackQuestionarieComponent } from './feedback-questionarie/feedback-questionarie.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'employeesMaster', component: EmployeeDetailsComponent,
        children: [
            { path: 'add', component: AddEditEmployeeComponent },
            { path: 'edit/:employeeId', component: AddEditEmployeeComponent }
        ]
    },
    {
        path: 'questionarieMaster', component: FeedbackQuestionarieComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }