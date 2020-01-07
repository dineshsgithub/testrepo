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
            columnDefs: this.getColumnDefinations(),
            rowHeight:50
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
                filter: "agTextColumnFilter",
                width:100
            },
            {
                headerName: 'Email',
                field: 'employeeEmail',
                width:150
            },
            {
                headerName: 'MobileNo',
                field: 'employeeMobileNo',
                width:100
            },
            {
                headerName: 'Designation',
                field: 'employeeDesignation',
                width:150
            },
            {
                headerName: 'Reporting',
                field: 'employeeReporting',
                width: '100'
            },
            {
                headerName: 'Actions',
                field: '',
                cellRenderer: (params: any) => {
                    const eDiv = document.createElement('div');
                    eDiv.innerHTML = '<input type=\'button\' class=\'employee-name btn btn-primary\' value=\'Edit\'/>'
                    // eDiv.innerHTML = '<a class=\'employee-name\' href=\'javascript:void(0)\'>Edit</a> ';
                    const element = eDiv.querySelector('.employee-name');
                    if (element) {
                        element.addEventListener('click', () => {
                            this.navigateToEmployeeEdit(params.data.employeeId);
                        });
                    }
                    return eDiv;
                }
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