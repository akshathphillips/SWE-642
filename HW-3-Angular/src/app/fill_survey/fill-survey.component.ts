import { Component, OnInit } from '@angular/core';
import { Surveyform } from '../surveyform';
import { SurveyformService } from '../surveyform.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm ,ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs";
@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css'],
  providers:[SurveyformService]
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
