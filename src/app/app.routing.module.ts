import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { } from './feedback-questionarie/feedback-questionarie.module'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'employeesMaster', loadChildren: './employee/employee.module#EmployeeModule' },
    { path: 'questionarieMaster', loadChildren: './feedback-questionarie/feedback-questionarie.module#FeedbackQuestionarieModule' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule { }