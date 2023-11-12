import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    likedMostOptions: [] // Initialize an empty array for likedMostOptions
  };

  // Define properties for other Survey model properties here

  onLikedMostOptionChange(selected: boolean, option: string) {
    if (selected) {
      // If the option is selected, add it to the array
      this.surveyData.likedMostOptions.push(option);
    } else {
      // If the option is deselected, remove it from the array
      const index = this.surveyData.likedMostOptions.indexOf(option);
      if (index !== -1) {
        this.surveyData.likedMostOptions.splice(index, 1);
      }
    }
  }

  submitForm(formData: any) {
    console.log(formData);
    // Define the API URL
    const apiUrl = 'http://localhost:8080/api/surveys';

    // Define the headers for the POST request (you may need to adjust them)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Send the POST request to the API
    this.httpClient.post(apiUrl, formData, {headers}).subscribe(
      (response) => {
        console.log('Survey submitted successfully', response);
        // Reset the form after successful submission if needed
        // this.surveyForm.reset();
      },
      (error) => {
        console.error('Error submitting survey', error);
      }
    );
  }
}
