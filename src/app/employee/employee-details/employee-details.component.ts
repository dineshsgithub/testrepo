import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeDetailsService } from './employee-details.service';
import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
    selector: 'employee-details',
    templateUrl: 'employee-details.component.html'
})

export class EmployeeDetailsComponent implements OnInit, AfterViewInit {
    allEmployeesGridOptions: GridOptions;
    constructor(private employeeDetailsService: EmployeeDetailsService,
        private router: Router) {
    }
    ngOnInit() {
        this.allEmployeesGridOptions = {
            columnDefs: this.getColumnDefinations()
        } as GridOptions;
    }

    ngAfterViewInit() {
        var data = this.employeeDetailsService.getAllEmployees();
        this.allEmployeesGridOptions.api.setRowData(data);
    }

    public getColumnDefinations(): any[] {
        return [
            {
                headerName: 'Name',
                field: 'employeeName',
                cellRenderer: (params: any) => {
                    const eDiv = document.createElement('div');
                    eDiv.innerHTML = '<a class=\'employee-name\' href=\'javascript:void(0)\'>' + params.data.employeeName + '</a> ';
                    const element = eDiv.querySelector('.employee-name');
                    if (element) {
                        element.addEventListener('click', () => {
                            this.navigateToEmployeeEdit(params.data.employeeId);
                        });
                    }
                    return eDiv;
                }
            },
            {
                headerName: 'Email',
                field: 'employeeEmail'
            },
            {
                headerName: 'MobileNo',
                field: 'employeeMobileNo'
            },
            {
                headerName: 'Designation',
                field: 'employeeDesignation'
            },
            {
                headerName: 'Reporting',
                field: 'employeeReporting'
            }
        ];
    }

    private navigateToEmployeeEdit(employeeId: number) {
        this.router.navigate(['Edit', employeeId]);
    }
    private AddEmployee() {
        this.router.navigate(['Add']);
    }
}