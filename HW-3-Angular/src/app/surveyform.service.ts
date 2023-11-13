import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, pipe } from 'rxjs';
import { Surveyform } from './surveyform';

@Injectable({
  providedIn: 'root'
})
export class SurveyformService {
  private baseURL = 'http://localhost:8080/api/surveys';
  constructor(private httpClient: HttpClient) { }
  getSurveyList(): Observable<Surveyform[]> {
    return this.httpClient.get<Surveyform[]>(`${this.baseURL}`);
  }

  createSurveyform(surveyform: Surveyform): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, surveyform);
  
}
}