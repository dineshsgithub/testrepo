import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IEmployee } from '../employee.model';
import { EmployeeDetailsService } from '../employee-details/employee-details.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
    selector: 'add-edit-employee',
    templateUrl: 'add-edit-employee.component.html'
})
export class AddEditEmployeeComponent implements OnInit {
    EmployeeForm: FormGroup;
    filteredListItem: IEmployee[] = [];
    isAddForm: boolean;
    allEmployeeList: IEmployee[] = [];
    filteredEmployeeList: Observable<IEmployee[]>;
    clientList = [
        { Id: 1, Name: 'PWC' },
        { Id: 2, Name: 'CTS' },
        { Id: 3, Name: 'TCS' },
        { Id: 4, Name: 'IBM' },
        { Id: 5, Name: 'KPIT' }
    ];

    feedBacktypeList = [
        { Id: 1, Name: 'Service' },
        { Id: 2, Name: 'Resource' },
        { Id: 3, Name: 'All' }
    ];

    selectedClientList = [1, 2];

    constructor(private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeeDetailsService: EmployeeDetailsService) {
    }

    ngOnInit() {
        this.EmployeeForm = this.setupForm();
        this.filteredEmployeeList = this.EmployeeForm.controls["employeeName"].valueChanges
            .pipe(
                startWith(''),
                map(value => typeof value === 'string' ? value : value.employeeName),
                map(employeeName => employeeName ? this.filterEmployees(employeeName) : this.allEmployeeList.slice())
            );
        this.activatedRoute.params.subscribe((param: Params) => {
            if (param && Object.keys(param).length === 0) {
                this.isAddForm = true;
                this.allEmployeeList = this.employeeDetailsService.getAllEmployees();
                this.EmployeeForm.controls["employeeName"].enable();
            }
            else {
                this.isAddForm = false;
                this.getEmployeeDetails(+param.employeeId);

            }
        });
    }

    getselectedOption(ev: MatAutocompleteSelectedEvent) {
        const employee = ev.option.value as IEmployee;
        this.getEmployeeDetails(employee.employeeId);
        this.EmployeeForm.controls["employeeName"].setValue(employee.employeeName);
    }
    clearTextBox() {
        this.EmployeeForm.controls["employeeName"].setValue('');
    }
    setupForm(): FormGroup {
        return this.fb.group({
            employeeId: '',
            employeeName: [{ value: '', disabled: true }],
            employeeEmail: [{ value: '', disabled: true }],
            employeeMobileNo: [{ value: '', disabled: true }],
            employeeDesignation: [{ value: '', disabled: true }],
            employeeReporting: [{ value: '', disabled: true }],
            userType: true,
            emailNotification: false,
            client: null,
            feedback: null
        });
    }
    
    navigateToHome() {
        this.router.navigate(['employeesMaster']);
    }

    private getEmployeeDetails(employeeId: number) {
        var employeeDetails: IEmployee;
        if (this.allEmployeeList && this.allEmployeeList.length > 0) {
            employeeDetails = this.allEmployeeList.find(emp => emp.employeeId === employeeId);
        }
        else {
            employeeDetails = this.employeeDetailsService.getEmployeeDetails(employeeId);
        }
        this.EmployeeForm.patchValue(employeeDetails);
    }

    private saveEmployee() {
        console.log(this.EmployeeForm.value);
    }

    private filterEmployees(employeeName: string): IEmployee[] {
        return this.allEmployeeList.filter(employee => employee.employeeName.toLowerCase().indexOf(employeeName.toLowerCase()) === 0);
    }
}