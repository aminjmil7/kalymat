import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionBubbleComponent } from './question/question-bubble/question-bubble.component';
import { QuestionComponent } from './question/question.component';
import { ResponseFourComponent } from './question/response-four/response-four.component';
import { ResponseOneComponent } from './question/response-one/response-one.component';
import { ResponseThreeComponent } from './question/response-three/response-three.component';
import { ResponseTwoComponent } from './question/response-two/response-two.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    ResultComponent,
    QuestionBubbleComponent,
    ResponseOneComponent,
    ResponseTwoComponent,
    ResponseThreeComponent,
    ResponseFourComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
