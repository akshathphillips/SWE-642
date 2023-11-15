import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {SurveyFormService} from "./survey-form.service";
import {SurveyListComponent} from "./survey-list/survey-list.component";
import {HttpClientModule} from "@angular/common/http";
import {SurveyFormComponent} from "./survey-form/survey-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SurveyListComponent,
    SurveyFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  providers: [SurveyFormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
