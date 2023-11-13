import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {

  constructor(private httpClient: HttpClient) {
  }


  likedMostOptionsValues: string[] = [
    'STUDENTS', 'LOCATION', 'CAMPUS', 'ATMOSPHERE', 'DORM_ROOMS', 'SPORTS'
  ];

  surveyData: any = {
    likedMostOptions: []
  };

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
    const apiUrl = 'http://localhost:8080/api/surveys';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpClient
      .post(apiUrl, formData, {headers})
      .pipe(
        catchError((error: any) => {
          console.error('Error submitting survey', error);
          throw new Error(error);
        })
      )
      .subscribe((response) => {
        console.log('Survey submitted successfully', response);
        // this.surveyForm.reset();
      });
  }
}
