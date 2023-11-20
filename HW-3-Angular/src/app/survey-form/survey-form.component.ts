import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SurveyFormService} from '../survey-form.service';
import {SurveyForm} from "../survey-form";
import {catchError} from "rxjs";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  @Input() surveyData: SurveyForm = new SurveyForm();
  @Input() isUpdate: boolean = false;


  @ViewChild('surveyForm') public surveyForm: NgForm | undefined;
  likedMostOptionsValues: string[] = ['STUDENTS', 'LOCATION', 'CAMPUS', 'ATMOSPHERE', 'DORM_ROOMS', 'SPORTS'];
  @Output() close = new EventEmitter<void>(); // Event emitter for cancel action

  constructor(private formService: SurveyFormService, private router: Router) {
  }

  validateRequired(value: string | string[]): any {
    if (!value) {
      return {required: 'Required field'};
    }
    return null;
  }

  validateLikedMostOptions() {
    if (this.surveyData.likedMostOptions.length === 0) {
      return {required: 'Required field'};
    }
    return null;
  }

  cancelEdit() {
    this.close.emit();
  }

  onLikedMostOptionChange(checked: any, option: string) {
    if (checked?.target?.checked) {
      if (!this.surveyData.likedMostOptions.includes(option)) {
        this.surveyData.likedMostOptions.push(option);
      }
    } else {
      const index = this.surveyData.likedMostOptions.indexOf(option);
      if (index !== -1) {
        this.surveyData.likedMostOptions.splice(index, 1);
      }
    }
  }

  submitForm(formData: any) {
    console.log(formData);

    if (this.isUpdate) {
      this.formService
        .updateSurvey(this.surveyData.id, formData)
        .pipe(catchError((error: any) => {
          console.error('Error submitting survey', error);
          throw new Error(error);
        }))
        .subscribe((response) => {
          console.log('Survey submitted successfully', response);
          if (this.surveyForm) {
            this.surveyForm.reset();
            this.close.emit();
          }
        });
    } else {
      this.formService
        .createSurvey(formData)
        .pipe(catchError((error: any) => {
          console.error('Error submitting survey', error);
          throw new Error(error);
        }))
        .subscribe((response) => {
          console.log('Survey submitted successfully', response);
          if (this.surveyForm) {
            this.surveyForm.reset();
            this.router.navigate(['/survey-list']);
          }
        });
    }
  }

  ngOnInit(): void {
    console.log(this.surveyData);
  }
}
