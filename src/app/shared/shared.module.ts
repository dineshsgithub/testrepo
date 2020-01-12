import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatRadioModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [AgGridModule.withComponents([])],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AgGridModule,
        HttpClientModule,
        RouterModule,
        MatRadioModule,
        MatSelectModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        CommonModule
    ]
})
export class SharedModule {

}