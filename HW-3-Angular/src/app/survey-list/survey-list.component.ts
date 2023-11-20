import {Component, OnInit} from '@angular/core';
import {SurveyForm} from '../survey-form';
import {SurveyFormService} from '../survey-form.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveyForms: SurveyForm[] = [];
  isFormVisible = false;
  editingSurvey: SurveyForm = new SurveyForm();

  constructor(private surveyFormService: SurveyFormService) {
  }

  ngOnInit(): void {
    this.getSurveyForms();
  }

  getSurveyForms() {
    this.surveyFormService.getSurveyList().subscribe(data => {
      this.surveyForms = data;
    });
  }

  updateSurvey(surveyId: string) {
    this.surveyFormService.getSurvey(surveyId).subscribe((data) => {
      this.editingSurvey = data;
      this.isFormVisible = true;
    });
  }

  hideForm() {
    this.isFormVisible = false;
    this.editingSurvey = new SurveyForm();
    this.getSurveyForms();
  }

  deleteSurvey(surveyId: string) {
    this.surveyFormService.deleteSurvey(surveyId).subscribe(() => {
      this.getSurveyForms();
    });
  }
}


