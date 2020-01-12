import { NgModule } from '@angular/core';
import { FeedbackQuestionarieComponent } from './feedback-questionarie.component'
 import { SharedModule } from '../shared/shared.module';
import { FeedbackQuestionarieRoutingModule } from './feedback-questionarie.routing.module';
@NgModule({
    imports: [
        SharedModule,
        FeedbackQuestionarieRoutingModule
        ],
    declarations: [FeedbackQuestionarieComponent]
})
export class FeedbackQuestionarieModule {

}