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
            feedbackQuestions1: ['', [Validators.required, Validators.maxLength(50)]]//todo change this to formgroup.
        });
    }

    addFeedBackQuestionControl() {
        this.feedbackQuestionsCount.push(1);
        let controlName = 'feedbackQuestions' + this.feedbackQuestionsCount.length;
        this.feedbackQuestionarieForm.addControl(controlName,
            new FormControl('', [Validators.required, Validators.maxLength(50)]));
        this.feedbackQuestionarieForm.updateValueAndValidity();
        //To do set focus to the newly added control
    }

    isFeedBackQuestionControlValid(): boolean {
        let controlNameToValidate = 'feedbackQuestions' + this.feedbackQuestionsCount.length;
        return this.feedbackQuestionarieForm.controls[controlNameToValidate].invalid;
    }

    submitForm() {
        console.log(this.feedbackQuestionarieForm.value)
    }

    onCancelClick(){
        this.feedbackQuestionarieForm.reset();
        this.feedbackQuestionsCount = new Array(1);
    }
}