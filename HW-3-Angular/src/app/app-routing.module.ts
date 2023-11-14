import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { FillSurveyComponent } from './fill-survey/fill-survey.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path: 'surveyform', component: SurveyListComponent},
  {path: 'fill-survey', component: FillSurveyComponent},
  {path: 'homepage', component: HomepageComponent},
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
