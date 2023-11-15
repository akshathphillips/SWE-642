import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {SurveyListComponent} from "./survey-list/survey-list.component";
import {SurveyFormComponent} from "./survey-form/survey-form.component";

const routes: Routes = [
  {path: 'survey-list', component: SurveyListComponent},
  {path: 'survey-form', component: SurveyFormComponent},
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
export class AppRoutingModule {
}
