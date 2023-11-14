import { Component, OnInit } from '@angular/core';
import { Surveyform } from '../surveyform';
import { SurveyformService } from '../surveyform.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  surveyforms: Surveyform[] = [];
  constructor(private surveyformservice : SurveyformService) { } 
  ngOnInit(): void {
    this.getsurveyforms();
  }
  private getsurveyforms(){
      this.surveyformservice.getSurveyList().subscribe(data => {
        this.surveyforms = data;
      });
    }
  }  
  

