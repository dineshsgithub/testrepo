import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { HomeComponent } from './home/home.component';
import { FeedbackQuestionarieComponent } from './feedback-questionarie/feedback-questionarie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'employeesMaster', component: EmployeeDetailsComponent,
        children: [
            { path: 'add', component: AddEditEmployeeComponent },
            { path: 'edit/:employeeId', component: AddEditEmployeeComponent }
        ]
    },
    {
        path: 'questionarieMaster', component: FeedbackQuestionarieComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }