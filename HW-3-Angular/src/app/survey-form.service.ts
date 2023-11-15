import {HttpClient} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SurveyForm} from './survey-form';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  private baseURL = 'http://localhost:8080/api/surveys';

  constructor(private httpClient: HttpClient) {
  }

  getSurveyList(): Observable<SurveyForm[]> {
    return this.httpClient.get<SurveyForm[]>(`${this.baseURL}`);
  }

  createSurvey(surveyForm: SurveyForm): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, surveyForm);

  }
}
