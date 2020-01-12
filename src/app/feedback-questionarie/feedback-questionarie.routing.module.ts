import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackQuestionarieComponent } from './feedback-questionarie.component';

const feedbackQuestionarieRoutes: Routes = [
    { path: '', component: FeedbackQuestionarieComponent }
]

@NgModule({
    imports: [RouterModule.forChild(feedbackQuestionarieRoutes)],
    // exports:[RouterModule]
})
export class FeedbackQuestionarieRoutingModule {

}