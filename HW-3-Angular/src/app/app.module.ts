import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // <-- Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { NgForm,FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    HomepageComponent,
    FillSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
