import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    cards = [
        {
            title: 'Employee Master',
            text: 'This is regarding employee master.',
            navigationLink: '/employeesMaster'
        },
        {
            title: 'FeedBack Questionnaire Master',
            text: 'This is regarding FeedBack Questionarie Master.',
            navigationLink: '/questionarieMaster'
        }
    ]
    constructor(private router: Router) {

    }
    navigateToEmployeeMaster() {
        this.router.navigate(['employeesMaster']);
    }

    navigateToQuestionarieMaster() {
        this.router.navigate(['questionarieMaster']);
    }
}