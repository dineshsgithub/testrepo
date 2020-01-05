import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DataFile } from './../../data';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IEmployee } from '../employee.module';
import { EmployeeDetailsService } from '../employee-details/employee-details.service';

@Component({
    selector: 'add-edit-employee',
    templateUrl: 'add-edit-employee.component.html'
})
export class AddEditEmployeeComponent implements OnInit {
    EmployeeForm: FormGroup;
    filteredListItem = [];
    displayAutocomplete: boolean;
    isAddForm: boolean;
    allEmployeeList: IEmployee[] = [];
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
        this.EmployeeForm.controls["employeeName"].valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe(employeeName => {
            if (this.displayAutocomplete) {
                this.filteredListItem = this.allEmployeeList.filter(a => a.employeeName.toLowerCase().includes(employeeName.toLowerCase()));
                if (this.filteredListItem.length === 0) {
                    this.EmployeeForm.reset();//Reset all Controls except employee Name:todo
                }
            }
        });
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

    showDropDown() {
        if (this.EmployeeForm.controls["employeeName"] && this.EmployeeForm.controls["employeeName"].value
            && this.EmployeeForm.controls["employeeName"].value.length >= 2) {
            this.displayAutocomplete = true;
        }
        else {
            this.displayAutocomplete = false;
        }
    }

    selectValue(item: IEmployee) {
        this.displayAutocomplete = false;
        this.getEmployeeDetails(item.employeeId);
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
    NavigateToHome() {
        this.router.navigate(['']);
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

    private SaveEmployee() {
        console.log(this.EmployeeForm.value);
    }
}