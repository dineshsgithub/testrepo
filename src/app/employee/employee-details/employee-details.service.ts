import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee.module';

@Injectable()
export class EmployeeDetailsService {

    constructor(private http: HttpClient) {
    }

    // public getAllEmployees(): Observable<IEmployee[]> {
    //     return this.http.get<IEmployee[]>('');
    // }
    public getAllEmployees(): IEmployee[] {
        return [
            {
                employeeId: 1,
                employeeName: 'Dinesh',
                employeeEmail: 'abc@gmail.com',
                employeeMobileNo: '1234567890',
                employeeDesignation: 'Software Developer',
                employeeReporting: 'xyz',
                emailNotification: false,
                userType: 'A',
                client: [1, 2],
                feedback: [1]

            },
            {
                employeeId: 2,
                employeeName: 'Dinesh 2',
                employeeEmail: 'pqr@gmail.com',
                employeeMobileNo: '0987654321',
                employeeDesignation: 'Test Designation',
                employeeReporting: 'pqr',
                emailNotification: true,
                userType: 'A',
                client: [1, 2],
                feedback: [1]
            },
            {
                employeeId: 3,
                employeeName: 'Dinesh 3',
                employeeEmail: 'a@gmail.com',
                employeeMobileNo: '9090909090',
                employeeDesignation: 'Manager',
                employeeReporting: 'K',
                emailNotification: true,
                userType: 'A',
                client: [1, 2],
                feedback: [1]
            },
            {
                employeeId: 4,
                employeeName: 'Krishna',
                employeeEmail: 'Krishna@gmail.com',
                employeeMobileNo: '888888888',
                employeeDesignation: 'Sr Manager',
                employeeReporting: 'Krish',
                emailNotification: true,
                userType: 'A',
                client: [1, 2],
                feedback: [1]
            }
        ]
    }

    // public getEmployeeDetails(employeeId:number):Observable<IEmployee>{
    //     return this.http.get<IEmployee>('');
    // }

    public getEmployeeDetails(employeeId: number): IEmployee {
        return this.getAllEmployees().find(emp => emp.employeeId === employeeId);
    }
}