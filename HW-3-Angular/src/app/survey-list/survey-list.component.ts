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
  }


