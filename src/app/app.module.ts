import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { EmployeeDetailsService } from './employee/employee-details/employee-details.service';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { MatRadioModule, MatSelectModule,MatCheckboxModule, MatAutocompleteModule } from '@angular/material';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,EmployeeDetailsComponent,AddEditEmployeeComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AppRoutingModule,
    RouterModule, MatRadioModule, MatSelectModule,MatCheckboxModule,MatAutocompleteModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
