export interface IEmployee {
    employeeId: number,
    employeeName: string,
    employeeEmail: string,
    employeeMobileNo: string,
    employeeDesignation: string,
    employeeReporting: string,
    userType: string,
    emailNotification: boolean,
    client: number[],
    feedback: number[]
}