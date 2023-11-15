import {Component, ViewChild} from '@angular/core';
import {SurveyFormService} from '../survey-form.service';
import {SurveyForm} from "../survey-form";
import {catchError} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {

  @ViewChild('surveyForm') public surveyForm: NgForm | undefined;

  constructor(private formService: SurveyFormService) {
  }

  validateRequired(value: string | string[]): any {
    if (!value) {
      return {required: 'Required field'};
    }
    return null;
  }

  validateLikedMostOptions() {
    if (this.surveyData.likedMostOptions.length === 0) {
      return {required: 'Please select at least one option for Liked Most'};
    }
    return null;
  }

  likedMostOptionsValues: string[] = [
    'STUDENTS', 'LOCATION', 'CAMPUS', 'ATMOSPHERE', 'DORM_ROOMS', 'SPORTS'
  ];

  surveyData = new SurveyForm();

  onLikedMostOptionChange(selected: boolean, option: string) {
    if (selected) {
      this.surveyData.likedMostOptions.push(option);
    } else {
      const index = this.surveyData.likedMostOptions.indexOf(option);
      if (index !== -1) {
        this.surveyData.likedMostOptions.splice(index, 1);
      }
    }
  }

  submitForm(formData: any) {
    console.log(formData);
    this.formService
      .createSurvey(formData)
      .pipe(
        catchError((error: any) => {
          console.error('Error submitting survey', error);
          throw new Error(error);
        })
      )
      .subscribe((response) => {
        console.log('Survey submitted successfully', response);
        if (this.surveyForm) {
          this.surveyForm.reset();
        }
      });
  }
}
