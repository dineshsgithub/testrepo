import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'feedback-questionarie',
    templateUrl: './feedback-questionarie.component.html'
})
export class FeedbackQuestionarieComponent implements OnInit {
    feedbackQuestionarieForm: FormGroup;
    typeOfFeedbacks = [
        { id: 1, description: 'Feedback type 1' },
        { id: 2, description: 'Feedback type 2' },
        { id: 3, description: 'Feedback type 3' },
        { id: 4, description: 'Feedback type 4' }
    ]

    subTypes = [
        { id: 1, description: 'Sub type 1' },
        { id: 2, description: 'Sub type 2' },
        { id: 3, description: 'Sub type 3' },
        { id: 4, description: 'Sub type 4' }
    ]

    feedbackQuestionsCount = new Array(1);

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {
        this.feedbackQuestionarieForm = this.setupForm();
    }

    setupForm(): FormGroup {
        return this.fb.group({
            questionarieName: (['', Validators.required]),
            typeOfFeedback: '',
            subType: '',
            feedbackQuestions1: ['', [Validators.required, Validators.maxLength(50)]]
        });
    }

    addFeedBackQuestionControl() {
        this.feedbackQuestionsCount.push(1);
        this.feedbackQuestionarieForm.addControl('feedbackQuestions' + this.feedbackQuestionsCount.length,
            new FormControl('', [Validators.required, Validators.maxLength(50)]));
        this.feedbackQuestionarieForm.updateValueAndValidity();
    }

    isFeedBackQuestionControlValid(): boolean {
        let controlNameToValidate = 'feedbackQuestions' + this.feedbackQuestionsCount.length;
        return this.feedbackQuestionarieForm.controls[controlNameToValidate].invalid;
    }

    submitForm() {
        console.log(this.feedbackQuestionarieForm.value)
    }
}